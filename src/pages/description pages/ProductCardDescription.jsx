import React from 'react';
import { wheelf32 } from '../../assets/img';

const ProductCardDescription = () => {
  return (
    <div className="cart">
      <div className="container">
        <div className="goods">
          <div className="goods-block">
            <img src={wheelf32} alt="logo" />
            <div className="g-table">
              <div className="g-table__name">Характеристики:</div>
              <div className="g-table__item">
                Ширина:
                <div className="g-table__ed">295</div>
              </div>
              <div className="g-table__item">
                Высота:
                <div className="g-table__ed">40</div>
              </div>
              <div className="g-table__item">
                Диаметр:
                <div className="g-table__ed">21</div>
              </div>
              <div className="g-table__item">
                Сезонность:
                <div className="g-table__ed">Зима</div>
              </div>
              <div className="g-table__item">
                RunFlut:
                <div className="g-table__ed">Нет</div>
              </div>
              <div className="g-table__item">
                Индекс скорости:
                <div className="g-table__ed">Y</div>
              </div>
              <div className="g-table__item">
                Индекс нагрузки:
                <div className="g-table__ed">111</div>
              </div>
            </div>
            <div className="g-tablee">
              <div className="g-table__name">Наличие:</div>
              <div className="g-table__item">
                Код товара:
                <div className="g-table__ed">256760</div>
              </div>
              <div className="g-table__item">
                Статус:
                <div className="g-table__ed">В наличии</div>
              </div>
              <div className="g-table__item">
                Кол-во:
                <div className="g-table__ed">28 шт.</div>
              </div>
              <div className="go-price">
                <a href={() => false} className="buy-button__buy">
                  В корзину
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDescription;
