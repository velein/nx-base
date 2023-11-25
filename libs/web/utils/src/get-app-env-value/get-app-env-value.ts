import { EnvKey } from './get-app-env-value.types';

export function getAppEnvValue(parameter: EnvKey): string | undefined {
  const env = import.meta.env;

  if (env && env[parameter]) {
    return import.meta.env[parameter];
  }

  if (
    typeof window !== 'undefined' &&
    window.config &&
    window.config[parameter]
  ) {
    return window.config?.[parameter];
  }

  return undefined;
}
