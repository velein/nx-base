/*
 * Import necessary modules
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

/*
 * Define the viteBaseConfig function
 */
export const viteBaseConfig = (
  settings: {
    viteChecker?: {
      tsconfigPath: string;
      absoluteAppPath: string;
    };
  } = {},
) => {
  const { viteChecker } = settings;

  /*
   * Return the configuration object using defineConfig
   */
  return defineConfig({
    plugins: [
      /*
       * Use the React plugin
       */
      react(),

      /*
       * Use the SVGR plugin for handling SVG files
       */
      svgr(),

      /*
       * Use the vite-plugin-checker plugin for type checking and linting
       * It is conditionally enabled based on the presence of viteChecker
       */
      viteChecker && {
        ...checker({
          typescript: {
            tsconfigPath: viteChecker.tsconfigPath,
          },
          eslint: { lintCommand: 'eslint "src/**/*.{ts,tsx}"' },
        }),
        apply: 'serve',
      },

      /*
       * Another instance of vite-plugin-checker for the build process
       * This is also conditionally enabled based on viteChecker
       */
      viteChecker && {
        ...checker({
          typescript: {
            tsconfigPath: viteChecker.tsconfigPath,
          },
          eslint: {
            lintCommand: `eslint "${viteChecker.absoluteAppPath}/**/*.{ts,tsx}"`,
          },
        }),
        apply: 'build',
      },
    ],
  });
};
