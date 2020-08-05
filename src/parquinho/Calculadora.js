import { info } from './logger.js';

class Calculadora {
  total = 0;
  soma = (listaNumeros) => {
    const resultado = listaNumeros.reduce((a, b) => a + b, 0);
    this.total += resultado;
    info(`total atualizado: ${this.total}`);
    return resultado;
  };
}

export default Calculadora;
