import React from 'react';
import PropTypes from 'prop-types';

import { ProductCard, FilterMenu } from './index';
// Основная панель с товарами

function ContentPage({ sortItems, items }) {
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
                  <span className="sort-header">Сортировать: </span>
                  {sortItems &&
                    sortItems.map((item, index) => (
                      <a
                        href={() => false}
                        className={
                          activeSortItem === index
                            ? 'sort-content active_top'
                            : 'sort-content'
                        }
                        key={`${item}_${index}`}
                        onClick={() => toggleActiveSortItem(index)}>
                        {item.name}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="catalog">
              {items &&
                items.map((item) => <ProductCard key={item.id} {...item} />)}
            </div>

            {/*{TODO: переписать этот блок}*/}
            <div className="main-bottom">
              <div className="main-top__content">
                <div className="sort">
                  <a href={() => false} className="sort-content active_bottom">
                    1
                  </a>
                  <a href={() => false} className="sort-content">
                    2
                  </a>
                  <a href={() => false} className="sort-content">
                    3
                  </a>
                  <a href={() => false} className="sort-content">
                    4
                  </a>
                  <a href={() => false} className="sort-content">
                    5
                  </a>
                  <a
                    href={() => false}
                    className="main-button main-button__text">
                    Далее
                  </a>
                </div>
                <div className="limit top">
                  <span className="top-header">Показать</span>
                  <a href={() => false} className="top-content__active">
                    60
                  </a>
                  <a href={() => false} className="top-content">
                    120
                  </a>
                  <a href={() => false} className="top-content">
                    240
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ContentPage.propTypes = {
  sortItems: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.object),
};

export default ContentPage;
