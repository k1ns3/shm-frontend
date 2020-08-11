import React from 'react';

const AsideFilterElement = ({ item, value }) => {
  return (
    <div className="aside_filters-option">
      <label>
        <input id={item} type="radio" name="radio" value={item} />
        <label htmlFor={item}>{value}</label>
      </label>
    </div>
  );
};

export default AsideFilterElement;
