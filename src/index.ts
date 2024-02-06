import 'dotenv/config';

import { createApp } from './app';

async function bootstrap() {
  const app = createApp();
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

bootstrap();
