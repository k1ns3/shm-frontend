import React from 'react';

import { wheelf32, deleteSvg } from '../assets/img';

function Cart() {
  return (
    <div class="cart">
      <div class="container">
        <table class="list-product">
          <thead>
            <tr>
              <td class="name">Товар</td>
              <td class="quantity">Количество</td>
              <td class="price">Цена</td>
              <td class="delete"></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="name">
                <img src={wheelf32} alt="tovar" class="name-img" />
                <div class="name-text">
                  <span class="name-title">NZ F-32</span>
                  <span class="name-title__small">
                    Литой , белый с полированной лицевой поверхностью
                  </span>
                </div>
              </td>
              <td class="quantity">
                <div class="spinCtrl">
                  <button class="decrease">-</button>
                  <button class="increase">+</button>
                  <input type="text" name="quantity" value="2" />
                </div>
              </td>
              <td class="price">
                <div class="price-box tb">
                  <span>
                    12 190 <span class="currency">₽</span>
                  </span>
                </div>
              </td>
              <td class="delete">
                <a href="#" title="Удалить">
                  <img class="delete-img" src={deleteSvg} alt="delete" />
                </a>
              </td>
            </tr>
            <tr>
              <td class="name">
                <img src={wheelf32} alt="tovar" class="name-img" />
                <div class="name-text">
                  <span class="name-title">NZ F-32</span>
                  <span class="name-title__small">
                    Литой , белый с полированной лицевой поверхностью
                  </span  >
                </div>
              </td>
              <td class="quantity">
                <div class="spinCtrl">
                  <button class="decrease">-</button>
                  <button class="increase">+</button>
                  <input type="text" name="quantity" value="2" />
                </div>
              </td>
              <td class="price">
                <div class="price-box tb">
                  <span>
                    12 190 <span class="currency">₽</span>
                  </span>
                </div>
              </td>
              <td class="delete">
                <a href="#" title="Удалить">
                  <img class="delete-img" src={deleteSvg} alt="delete" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="result">
          <div class="itog">Итог</div>
          <div class="summa">
            24 380<span class="currency">₽</span>
          </div>
        </div>
        <div class="buy">
          <a href="#" class="buy-button__retry">
            Продолжить покупки
          </a>

          <a href="form.html" class="buy-button__buy">
            Оформить заказ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
