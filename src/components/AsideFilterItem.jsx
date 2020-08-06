import React from 'react';

const AsideFilterItem = ({ item, value }) => {
  return (
    <div className="aside_filters-option">
      <label>
        <input id={item} type="radio" name="radio" value={null} />
        <label htmlFor={item}>{value}</label>
      </label>
    </div>
  );
};

export default AsideFilterItem;
