const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    const characters = {
      arya: {
        name: 'Arya Stark',
        class: 'Rogue',
        phrases: ['Not today', 'A girl has no name.'],
      },
      brienne: {
        name: 'Brienne Tarth',
        class: 'Knight',
        phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'],
      },
      melissandre: {
        name: 'Melissandre',
        class: 'Necromancer',
        phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'],
      },
    };

    expect(getCharacter()).toBeUndefined();
    expect(getCharacter('arya')).toEqual(characters['arya']);
    expect(getCharacter('brienne')).toEqual(characters['brienne']);
    expect(getCharacter('melissandre')).toEqual(characters['melissandre']);
    expect(getCharacter('aryA')).toEqual(characters['arya']);
    expect(getCharacter('AryA')).toEqual(characters['arya']);
    expect(getCharacter('ARYA')).toEqual(characters['arya']); 
    expect(getCharacter('Raphael')).toBeUndefined();
  });
});
