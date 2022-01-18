const average = require('../src/average');

describe('1 - Implemente a função `average`', () => {
  it('Verifica se ao receber um array de números a função `average` retorna a média de seus valores', () => {
    expect(average([3, 4, 5])).toEqual(4);
    expect(average([0, 0, 0, 0, 0, 0, 0])).toEqual(0);    
    expect(average([1, 2, 3])).toEqual(2);
    expect(average([0, 0, 0, 0, 0, 0, 1])).toEqual(0);    
    expect(average([47, 63, 122])).toEqual(77);

    expect(average([-11, 2, 5])).toEqual(-1);    
    expect(average([-11, -5, 2])).toEqual(-5);
  });

  it('Verifica se ao receber um array que contém valores não numéricos a função `average` retorna `undefined`', () => {
    expect(average([1, 2, 3, '4', 5])).toBeUndefined();
    expect(average(['um', 'dois', 'tres'])).toBeUndefined();
    expect(average([1, 2, '3'])).toBeUndefined();
    expect(average([' '])).toBeUndefined();
  });

  it('Verifica se ao receber um array vazio a função `average` retorna `undefined`', () => {
    expect(average([])).toBeUndefined();
  });
});
