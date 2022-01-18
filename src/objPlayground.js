// Desenvolvida por mim

const calculator = (number1, number2) => {
  const object = {
    sum: Math.floor(number1 + number2),
    mult: Math.floor(number1 * number2),
    div: Math.floor(number1 / number2),
    sub: Math.floor(number1 - number2),
  };
  return object;
};

const arrayGenerator = (type, object) => Object[`${type}`](object);

module.exports = { calculator, arrayGenerator };
