import winston from 'winston';

jest.mock('winston', () => {
  return {
    createLogger: jest.fn(),
    transports: { File: jest.fn() },
  };
});

test('deve gerar arquivo de logger com nome de combine.log', () => {
  require('./logger.js');
  expect(winston.createLogger).toHaveBeenCalled();
  expect(winston.transports.File).toHaveBeenCalledWith({
    filename: 'combined.log',
  });
});
