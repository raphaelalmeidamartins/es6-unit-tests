const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
    const item1 = productDetails('Alcool gel', 'Máscara')[0];
    const item2 = productDetails('Alcool gel', 'Máscara')[1];
    expect(typeof item1 && typeof item2).toBe('object');
    expect(item1).not.toEqual(item2);
    expect(item1.details.productId).toMatch(/.*(123)$/);
    expect(item2.details.productId).toMatch(/.*(123)$/);
  });
});
