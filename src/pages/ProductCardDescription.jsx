import React from 'react';

const ProductCardDescription = () => {
  return (
    <div className="cart">
      <div className="container">
        <div className="goods">
          <div className="goods-block">
            <img src="img/content/F-32.wfp.jpg" alt="logo" />
            <div className="g-tabl">
              <div className="g-tabl__name">Характеристики:</div>
              <div className="g-tabl__item">
                Ширина:
                <div className="g-tabl__ed">295</div>
              </div>
              <div className="g-tabl__item">
                Высота:
                <div className="g-tabl__ed">40</div>
              </div>
              <div className="g-tabl__item">
                Диаметр:
                <div className="g-tabl__ed">21</div>
              </div>
              <div className="g-tabl__item">
                Сезонность:
                <div className="g-tabl__ed">Зима</div>
              </div>
              <div className="g-tabl__item">
                RunFlut:
                <div className="g-tabl__ed">Нет</div>
              </div>
              <div className="g-tabl__item">
                Индекс скорости:
                <div className="g-tabl__ed">Y</div>
              </div>
              <div className="g-tabl__item">
                Индекс нагрузки:
                <div className="g-tabl__ed">111</div>
              </div>
            </div>
            <div className="g-tabl">
              <div className="g-tabl__name">Наличие:</div>
              <div className="g-tabl__item">
                Код товара:
                <div className="g-tabl__ed">256760</div>
              </div>
              <div className="g-tabl__item">
                Статус:
                <div className="g-tabl__ed">В наличии</div>
              </div>
              <div className="g-tabl__item">
                Кол-во:
                <div className="g-tabl__ed">28 шт.</div>
              </div>
              <div className="go-price">
                <a href="#" className="buy-button__buy">
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
