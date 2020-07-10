import React from 'react';

import { Ice, Sun, wheelf32 } from '../assets/img';
import { ProductCard, FilterMenu } from './index';

function ContentPage({ sortItems }) {
  const [activeSortItem, setActiveSortItem] = React.useState(0);

  const toggleActiveSortItem = (index) => {
    setActiveSortItem(index);
  };

  return (
    <div className="main">
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
            <ProductCard tireType={Ice} />
            <ProductCard tireType={Sun} />
            <ProductCard tireType={Ice} />
          </div>
          <div className="catalog">
            <ProductCard tireType={Sun} />
            <ProductCard tireType={Ice} />
            <ProductCard tireType={Sun} />
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
    </div>
  );
}

export default ContentPage;
