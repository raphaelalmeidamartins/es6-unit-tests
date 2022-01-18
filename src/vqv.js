// Foi desenvolvida por mim

const vqv = (name, age) => {
  if (!name || !age) { return undefined; }
  let string = `Oi, meu nome é ${name}!
  Tenho ${age} anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!`;
  return string.replace(/[ ]{2}/g, '');
};

module.exports = vqv;
