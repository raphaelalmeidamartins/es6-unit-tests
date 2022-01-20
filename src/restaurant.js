// Criei tanto a função quanto os testes

const createMenu = (object) => {
  const menu = {
    consumption: [],
    fetchMenu: () => object,
    order: (order) => menu.consumption.push(order),
    pay: () => {
      let check = 0;
      menu.consumption.forEach((item) => {
        if (menu.food[item] || menu.drink[item]) {
          check += menu.food[item] || menu.drink[item]; // Simplifiquei conforme sugestão da Luá no code-review
        }
      });
      Number((check += check * 0.1).toFixed(2)); // Rafael Elias me avisou que eu havia esquecido de adicionar os 10% no valor do pedido. Halister me deu a dica do toFixed
      return check;
    },
  };
  Object.assign(menu, object);
  return menu;
};

module.exports = createMenu;
