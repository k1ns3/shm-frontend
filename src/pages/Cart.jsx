import React from 'react';

import { wheelf32, deleteSvg } from '../assets/img';

// Корзина
//TODO: перевести на гриды, заменить переключатели

function Cart() {
  return (
    <div className="cart">
      <div className="container">
        <table className="list-product">
          <thead>
            <tr>
              <td className="name">Товар</td>
              <td className="quantity">Количество</td>
              <td className="price">Цена</td>
              <td className="delete" />
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
                  <input type="text" name="quantity" defaultValue={2} />
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
                <a href={() => false} title="Удалить">
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
                  <input type="text" name="quantity" defaultValue={3} />
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
                <a href={() => false} title="Удалить">
                  <img className="delete-img" src={deleteSvg} alt="delete" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="result">
          <div className="conclusion">Итог</div>
          <div className="amount">
            24 380<span className="currency">₽</span>
          </div>
        </div>
        <div className="buy">
          <a href={() => false} className="buy-button__retry">
            Продолжить покупки
          </a>
          <a href={() => false} className="buy-button__buy">
            Оформить заказ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
