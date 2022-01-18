const average = (array) => {
  const arrayNotNumbers = array.filter((num) => typeof num !== 'number');
  if (arrayNotNumbers.length || !array.length) { return undefined; }
  const reducer = (previous, current) => previous + current;
  return Math.round(array.reduce(reducer) / array.length);
};

module.exports = average;
