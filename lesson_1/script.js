'use strict';

const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (item, img='https://admin.cgon.ru/storage/NTHhLIYLXzD8g7foriz0iKQ2nKNDBsq4Jm5G1mvY.jpeg') => `<div class="product_item" data-id="${this.id}">
              <img src="${img}" alt="picture">
              <div class="spreadsheet">
                  <h3>${item.title}</h3>
                  <p>${item.price} руб.</p>
                  <button class="button_buy">Купить</button>
              </div>
          </div>`;

const renderProducts = list => {
document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
};

renderProducts(products);

