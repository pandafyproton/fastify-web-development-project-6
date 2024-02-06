declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: string;
      LOG_LEVEL: 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace' | 'silent';
      DB_HOST: string;
      DB_NAME: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_PORT: string;
      SALT_SECRET: string;
      JWT_SECRET: string;
    }
  }
}
