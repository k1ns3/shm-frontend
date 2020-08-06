import React from 'react';
import AsideFilterItem from './AsideFilterItem';

// Боковая панель
// TODO: разобраться со стейтом радиобаттонов
function Aside({ asideFiltersItems }) {
  console.log(asideFiltersItems);
  return (
    <div className="sidebar bg-secondary">
      <div className="container">
        <div className="sidebar__block sidebar-block">
          <div className="main-top">
            {asideFiltersItems &&
              asideFiltersItems.map((item) => (
                <div className="aside_filters">
                  <div className="aside_filters-heading">
                    <div className="aside_filters-heading__content">
                      {item.label}
                    </div>
                  </div>
                  <div className="aside_filters-options">
                    <div className="aside_filters-options__scroll">
                      <div className="aside_filters-option">
                        {item.items &&
                          item.items.map((item, index) => (
                            <AsideFilterItem
                              key={`${item.value}_${index}`}
                              {...item}
                            />
                          ))}
                      </div>
                    </div>
                    <span className="aside_filters__line" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;
