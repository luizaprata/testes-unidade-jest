import { logger } from '../infraestrutura/logger.js';

class Calculadora {
  total = 0;
  soma = (listaNumeros) => {
    const resultado = listaNumeros.reduce((a, b) => a + b, 0);
    this.total += resultado;
    logger.info(`resultado da soma ${this.total}`);
    return resultado;
  };
}

export default Calculadora;
