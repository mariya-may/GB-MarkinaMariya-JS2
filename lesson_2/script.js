'use strict';

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this._goods = []; // data
    this._allProducts = []; // массив экземпляров товаров на основе this._goods
    this._fetchGoods();
    this._render();
  }

  //Метод, определяющий суммарную стоимость всех товаров.

  sum() {
    return this._goods.reduce((sum, { price }) => sum + price, 0);
  }


  _fetchGoods() {
    this._goods = [
      { id: 1, title: 'Notebook', price: 20000 },
      { id: 2, title: 'Mouse', price: 1500 },
      { id: 3, title: 'Keyboard', price: 5000 },
      { id: 4, title: 'Gamepad', price: 4500 },
    ];
  }

  _render() {
    const block = document.querySelector(this.container);

    for (const product of this._goods) {
      // console.log(new ProductItem(product).render());
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img = 'https://admin.cgon.ru/storage/NTHhLIYLXzD8g7foriz0iKQ2nKNDBsq4Jm5G1mvY.jpeg') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product_item" data-id="${this.id}">
                  <img src="${img}" alt="picture">
                   <div class="spreadsheet">
                       <h3>${item.title}</h3>
                       <p>${item.price} руб.</p>
                       <button class="button_buy">Купить</button>
                   </div>
               </div>`;
  }
}

const catalog = new ProductList();



// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
// 
// const renderProduct = (item, img='https://admin.cgon.ru/storage/NTHhLIYLXzD8g7foriz0iKQ2nKNDBsq4Jm5G1mvY.jpeg') => `<div class="product_item" data-id="${this.id}">
//               <img src="${img}" alt="picture">
//               <div class="spreadsheet">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} руб.</p>
//                   <button class="button_buy">Купить</button>
//               </div>
//           </div>`;
// 
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
// 
// renderProducts(products);

