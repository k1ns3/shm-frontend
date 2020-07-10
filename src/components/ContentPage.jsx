import React from 'react';

import { Ice, Sun, wheelf32 } from '../assets/img';
import { FilterMenu } from './index';

function ContentPage({ sortItems }) {
  const [activeSortItem, setActiveSortItem] = React.useState(0);

  const toggleActiveSortItem = (index) => {
    setActiveSortItem(index);
  };

  return (
    <content className="main">
      <div className="container">
        <div className="main-block">
          <div className="main-top">
            <FilterMenu />
            <div className="main-top__content">
              <div className="sort">
                <div className="sort_top">
                  <span className="sort_top-header">Сортировать: </span>
                  {sortItems &&
                    sortItems.map((name, index) => (
                      <a
                        className={
                          activeSortItem === index
                            ? 'sort_top-content__active_top'
                            : 'sort_top-content'
                        }
                        key={`${name}_${index}`}
                        onClick={() => toggleActiveSortItem(index)}>
                        {name}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="container"></div>
          <div className="catalog">
            <div className="product-container">
              <img className="product-img__ice" src={Ice} alt="ice" />
              <div className="product">
                <a href="more.html">
                  <img className="product-img" src={wheelf32} alt="" />
                </a>
                <div className="tovar">
                  <span className="tovar-title">NZ F-32</span>
                  <span className="tovar-title__small">Код товара</span>
                  <span className="tovar-title__small">
                    Литой , белый с полированной лицевой поверхностью
                  </span>
                  <div className="price price-box">
                    <span>
                      12 190 <span className="currency">₽</span>
                    </span>
                  </div>
                  <div className="price-b">
                    <a className="price-button price-button__text" href="#">
                      В корзину
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-container">
              <img className="product-img__sun" src={Sun} alt="sun" />
              <div className="product">
                <a href="more.html">
                  <img className="product-img" src={wheelf32} alt="" />
                </a>
                <div className="tovar">
                  <span className="tovar-title">NZ F-32</span>
                  <span className="tovar-title__small">Код товара</span>
                  <span className="tovar-title__small">
                    Литой , белый с полированной лицевой поверхностью
                  </span>
                  <div className="price price-box">
                    <span>
                      12 190 <span className="currency">₽</span>
                    </span>
                  </div>
                  <div className="price-b">
                    <a className="price-button price-button__text" href="#">
                      В корзину
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-container">
              <div className="product">
                <a href="more.html">
                  <img className="product-img" src={wheelf32} alt="" />
                </a>
                <div className="tovar">
                  <span className="tovar-title">NZ F-32</span>
                  <span className="tovar-title__small">Код товара</span>
                  <span className="tovar-title__small">
                    Литой , белый с полированной лицевой поверхностью
                  </span>
                  <div className="price price-box">
                    <span>
                      12 190 <span className="currency">₽</span>
                    </span>
                  </div>
                  <div className="price-b">
                    <a className="price-button price-button__text" href="#">
                      В корзину
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog">
            <div className="product-container">
              <div className="product">
                <a href="more.html">
                  <img className="product-img" src={wheelf32} alt="" />
                </a>
                <div className="tovar">
                  <span className="tovar-title">NZ F-32</span>
                  <span className="tovar-title__small">Код товара</span>
                  <span className="tovar-title__small">
                    Литой , белый с полированной лицевой поверхностью
                  </span>
                  <div className="price price-box">
                    <span>
                      12 190 <span className="currency">₽</span>
                    </span>
                  </div>
                  <div className="price-b">
                    <a className="price-button price-button__text" href="#">
                      В корзину
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-container">
              <div className="product">
                <a href="more.html">
                  <img className="product-img" src={wheelf32} alt="" />
                </a>
                <div className="tovar">
                  <span className="tovar-title">NZ F-32</span>
                  <span className="tovar-title__small">Код товара</span>
                  <span className="tovar-title__small">
                    Литой , белый с полированной лицевой поверхностью
                  </span>
                  <div className="price price-box">
                    <span>
                      12 190 <span className="currency">₽</span>
                    </span>
                  </div>
                  <div className="price-b">
                    <a className="price-button price-button__text" href="#">
                      В корзину
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-container">
              <div className="product">
                <a href="more.html">
                  <img className="product-img" src={wheelf32} alt="" />
                </a>
                <div className="tovar">
                  <span className="tovar-title">NZ F-32</span>
                  <span className="tovar-title__small">Код товара</span>
                  <span className="tovar-title__small">
                    Литой , белый с полированной лицевой поверхностью
                  </span>
                  <div className="price price-box">
                    <span>
                      12 190 <span className="currency">₽</span>
                    </span>
                  </div>
                  <div className="price-b">
                    <a className="price-button price-button__text" href="#">
                      В корзину
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-bottom">
            <div className="main-top__content">
              <div className="sort">
                <a className="sort-content__active_bottom" href="#">
                  1
                </a>
                <a className="sort-content" href="#">
                  2
                </a>
                <a className="sort-content" href="#">
                  3
                </a>
                <a className="sort-content" href="#">
                  4
                </a>
                <a className="sort-content" href="#">
                  5
                </a>
                <a className="main-button main-button__text" href="#">
                  Далее
                </a>
              </div>
              <div className="limit top">
                <span className="top-header">Показать</span>
                <a className="top-content__active" href="#">
                  60
                </a>
                <a className="top-content" href="#">
                  120
                </a>
                <a className="top-content" href="#">
                  240
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </content>
  );
}

export default ContentPage;
