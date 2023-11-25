import { join } from 'path';
import { mergeConfig } from 'vite';

import { viteBaseConfig } from '../../vite.config.base';

const NAME = 'web-project-name';

export default mergeConfig(
  viteBaseConfig({
    viteChecker: {
      absoluteAppPath: `apps/${NAME}`,
      tsconfigPath: join(__dirname, 'tsconfig.json'),
    },
    name: NAME,
  }),
  {
    // Override base config here
  },
);
