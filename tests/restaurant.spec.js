const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const anyMenu = { food: { coxinha: 3.9, sopa: 9.9 }, drink: { agua: 3.9, cerveja: 6.9 } };
   
    expect(typeof createMenu().fetchMenu).toBe('function');
    expect(createMenu({ food: {}, drink: {} }).fetchMenu()).toEqual({ food: {}, drink: {} });
    expect(createMenu(anyMenu).fetchMenu()).toEqual({ food: { coxinha: 3.9, sopa: 9.9 }, drink: { agua: 3.9, cerveja: 6.9 } });
    expect(createMenu(anyMenu).consumption).toEqual([]);

    let outputObject = createMenu(anyMenu)
    outputObject.order('coxinha');

    expect(outputObject.consumption).toEqual(['coxinha']);

    outputObject = createMenu(anyMenu);
    outputObject.order('coxinha');
    outputObject.order('agua');
    outputObject.order('sopa');
    outputObject.order('sashimi');

    expect(outputObject.consumption.length).toBe(4);

    outputObject = createMenu(anyMenu);
    outputObject.order('coxinha');
    outputObject.order('agua');
    outputObject.order('coxinha');

    expect(outputObject.consumption).toEqual(['coxinha', 'agua', 'coxinha']);

    outputObject = createMenu(anyMenu);
    outputObject.order('coxinha');
    outputObject.order('agua');
    outputObject.order('sopa');

    expect(outputObject.pay()).toBe(19.47);
  });
});
