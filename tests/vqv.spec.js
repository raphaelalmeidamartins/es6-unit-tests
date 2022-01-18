const vqv = require('../src/vqv.js');

describe('3 - Implemente a função `vqv`', () => {
  it('Verifica se `vqv` é uma função', () => {
    expect(typeof vqv).toBe('function');
  });

  it('Verifica se a função `vqv` retorna dados do tipo string', () => {
    expect(typeof vqv('Tunico', 30)).toBe('string');
  });

  it('Verifica se a função `vqv` retorna a frase esperada com nome e idade', () => {
    expect(
      vqv('Tunico', 29)).toBe(
      'Oi, meu nome é Tunico!\n' +
        'Tenho 29 anos,\n' +
        'trabalho na Trybe e mando muito em programação!\n' +
        '#VQV!',
    );
    expect(
      vqv('Alberto', 30)).toBe(
      'Oi, meu nome é Alberto!\n' +
        'Tenho 30 anos,\n' +
        'trabalho na Trybe e mando muito em programação!\n' +
        '#VQV!',
    );
    expect(
      vqv('Hamaji', 29)).toBe(
      'Oi, meu nome é Hamaji!\n' +
        'Tenho 29 anos,\n' +
        'trabalho na Trybe e mando muito em programação!\n' +
        '#VQV!',
    );
  });

  it('Verifica se a função `vqv`, sem parâmetro retorna undefined', () => {
    expect(vqv()).toBeUndefined();
  });
});
