import Fastify from 'fastify';
import pino from 'pino';

export function createApp() {
  const app = Fastify({
    logger: pino({
      level: 'info',
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      },
    }),
  });

  app.get('/', async function handler(request, reply) {
    return { hello: 'world' };
  });

  return app;
}
