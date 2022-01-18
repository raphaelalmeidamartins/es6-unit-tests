const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    expect(circle('a')).toBeUndefined();
    expect(typeof circle(1)).toBe('object');
    expect(Object.keys(circle(1)).length).toBe(3);
    expect(circle()).toBeUndefined();
    expect(circle(2).circumference).toBe(12.56);
    expect(circle(3).circumference).toBe(18.84);
    expect(circle(3)).toEqual({ radius: 3, area: 28.259999999999998, circumference: 18.84 });
  });
});
