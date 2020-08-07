import Calculadora from './Calculadora.js';
import { logger } from '../infraestrutura/logger.js';
jest.mock('../infraestrutura/logger.js', () => {
  return {
    logger: {
      info: jest.fn(),
    },
  };
});
test('Dado a lista [1,2,3] quando realizar a soma então deve retornar 6', () => {
  const calculadora = new Calculadora();
  expect(calculadora.soma([1, 2, 3])).toEqual(6);
});
// test('Dado a lista vazia quando realizar a soma então deve retornar 0', () => {
//   const calculadora = new Calculadora();
//   expect(calculadora.soma()).toEqual(0);
// });
test('Dado a lista [4,5] quando realizar a soma então deve acrescentar 9 à variável total', () => {
  const calculadora = new Calculadora();
  calculadora.soma([4, 5]);
  expect(calculadora.total).toEqual(9);
});
test('Dado a lista [4,5] e [6,4] quando realizar a soma então deve acrescentar 9 à variável total', () => {
  const calculadora = new Calculadora();
  calculadora.soma([4, 5]);
  calculadora.soma([6, 4]);
  expect(calculadora.total).toEqual(19);
});
test('Dado a lista [5,3,7] quando realizar a soma então deve chamar o info do logger com valor "total atualizado: 15"', () => {
  const calculadora = new Calculadora();
  calculadora.soma([5, 3, 7]);
  expect(logger.info).toHaveBeenCalledWith('resultado da soma 15');
});

//BDD - DADO um cenário QUANDO ocorrer uma ação DEVE ocorrer uma saída
