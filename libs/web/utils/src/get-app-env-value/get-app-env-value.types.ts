/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_ENV: string;
  VITE_APP_GATEWAY_API_URL: string;
  VITE_APP_AWS_REGION: string;
  VITE_APP_AWS_USER_POOL_ID: string;
  VITE_APP_AWS_APP_CLIENT_ID: string;
}

export type EnvKey = keyof ImportMetaEnv;

declare global {
  interface Window {
    config: Record<EnvKey, string | undefined>;
  }
}
