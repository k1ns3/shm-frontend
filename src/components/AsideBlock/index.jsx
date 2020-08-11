import React from 'react';
import AsideFilterElement from './AsideFilterItem';

// Боковая панель
// TODO: разобраться со стейтом радиобаттонов
function Index({ asideFiltersItems }) {
  console.log(asideFiltersItems);
  return (
    <div className="sidebar bg-secondary">
      <div className="container">
        <div className="sidebar__block sidebar-block">
          <div className="main-top">
            {asideFiltersItems &&
              asideFiltersItems.map((item, index) => (
                <div className="aside_filters" key={`${item}_${index}`}>
                  <div
                    className="aside_filters-heading"
                    key={`${item}-${index}`}>
                    <div
                      className="aside_filters-heading__content"
                      key={`${item}+${index}`}>
                      {item.label}
                    </div>
                  </div>
                  <div className="aside_filters-options">
                    <div className="aside_filters-options__scroll">
                      <div className="aside_filters-option">
                        {item.items &&
                          item.items.map((item, index) => (
                            <AsideFilterElement
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

export default Index;
