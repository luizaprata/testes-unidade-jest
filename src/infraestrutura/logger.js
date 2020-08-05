import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.File({ filename: 'combined.log' })],
});

export { logger };
