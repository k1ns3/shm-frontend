import React from 'react';

import { wheelf32, deleteSvg } from '../assets/img';

function Cart() {
  return (
    <div>
      <table className="list-product">
        <thead>
          <tr>
            <td className="name">Товар</td>
            <td className="quantity">Количество</td>
            <td className="price">Цена</td>
            <td className="delete"></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">
              <img src={wheelf32} alt="tovar" className="name-img" />
              <div className="name-text">
                <span className="name-title">NZ F-32</span>
                <span className="name-title__small">
                  Литой , белый с полированной лицевой поверхностью
                </span>
              </div>
            </td>
            <td className="quantity">
              <div className="spinCtrl">
                <button className="decrease">-</button>
                <button className="increase">+</button>
                <input type="text" name="quantity" value="2" />
              </div>
            </td>
            <td className="price">
              <div className="price-box tb">
                <span>
                  12 190 <span className="currency">₽</span>
                </span>
              </div>
            </td>
            <td className="delete">
              <a href="#" title="Удалить">
                <img className="delete-img" src={deleteSvg} alt="delete" />
              </a>
            </td>
          </tr>
          <tr>
            <td className="name">
              <img src={wheelf32} alt="tovar" className="name-img" />
              <div className="name-text">
                <span className="name-title">NZ F-32</span>
                <span className="name-title__small">
                  Литой , белый с полированной лицевой поверхностью
                </span>
              </div>
            </td>
            <td className="quantity">
              <div className="spinCtrl">
                <button className="decrease">-</button>
                <button className="increase">+</button>
                <input type="text" name="quantity" value="2" />
              </div>
            </td>
            <td className="price">
              <div className="price-box tb">
                <span>
                  12 190 <span className="currency">₽</span>
                </span>
              </div>
            </td>
            <td className="delete">
              <a href="#" title="Удалить">
                <img className="delete-img" src={deleteSvg} alt="delete" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="result">
        <div className="itog">Итог</div>
        <div className="summa">
          24 380<span className="currency">₽</span>
        </div>
      </div>
      <div className="buy">
        <a href="#" className="buy-button__retry">
          Продолжить покупки
        </a>
        <a href="form.html" className="buy-button__buy">
          Оформить заказ
        </a>
      </div>
    </div>
  );
}

export default Cart;
