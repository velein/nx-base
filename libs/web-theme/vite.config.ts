import { mergeConfig } from 'vite';

import dts from 'vite-plugin-dts';
import { join } from 'path';

import { viteBaseConfig } from '../../vite.config.base';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const NAME = 'web-theme';

export default mergeConfig(
  viteBaseConfig({
    viteChecker: {
      absoluteAppPath: `libs/${NAME}`,
      tsconfigPath: join(__dirname, 'tsconfig.lib.json'),
    },
  }),
  {
    cacheDir: `../../node_modules/.vite/${NAME}`,

    plugins: [
      dts({
        entryRoot: 'src',
        tsConfigFilePath: join(__dirname, 'tsconfig.lib.json'),
        skipDiagnostics: true,
      }),
      viteTsConfigPaths({
        root: '../../',
      }),
    ],

    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points.
        entry: 'src/index.ts',
        name: NAME,
        fileName: 'index',
        // Change this to the formats you want to support.
        // Don't forgot to update your package.json as well.
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        // External packages that should not be bundled into your library.
        external: ['react', 'react-dom', 'react/jsx-runtime'],
      },
    },
  },
);
