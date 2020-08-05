import Calculadora from './Calculadora.js';

test('Dado a soma da lista [1,2,3] deve retornar 6', () => {
  let calculadora = new Calculadora();
  calculadora.soma([1, 3, 4]);
});
test('Dado a soma de [1,2,3] deve acrescentar 6 à variável total', () => {});
test('Dado a soma [4,5,6] deve chamar o info do logger com valor "total atualizado: 15"', () => {});
