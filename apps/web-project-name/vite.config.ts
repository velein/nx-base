import { mergeConfig } from 'vite';
import { join } from 'path';

import { viteBaseConfig } from '../../vite.config.base';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const NAME = 'web-project-name';

export default mergeConfig(
  viteBaseConfig({
    viteChecker: {
      absoluteAppPath: `apps/${NAME}`,
      tsconfigPath: join(__dirname, 'tsconfig.app.json'),
    },
  }),
  {
    cacheDir: `../../node_modules/.vite/${NAME}`,

    server: {
      port: 3000,
      host: 'localhost',
    },

    preview: {
      port: 8000,
      host: 'localhost',
    },

    plugins: [
      viteTsConfigPaths({
        root: '../../',
      }),
    ],
  },
);
