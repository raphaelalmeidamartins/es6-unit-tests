// Já estava desenvolvida e eu só precisei substituir var por let para resolver o erro de vazamento de escopo

const myCounter = () => {
  const myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let counter2 = 2; counter2 <= 3; counter2 += 1) {
      myArray.push(counter2);
    }
  }
  return myArray;
};

module.exports = myCounter;
