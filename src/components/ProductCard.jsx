import React from 'react';
import { Link } from 'react-router-dom';
import { Ice, Sun } from '../assets/img';
import PropTypes from 'prop-types';

const ProductCard = ({ tirePhoto, season, model, price }) => {
  return (
    <div className="product-container">
      <img
        className="product-img__ice"
        src={season === 'S' ? Sun : Ice}
        alt="ice"
      />
      <div className="product">
        <Link to="carditem">
          <img className="product-img" src={tirePhoto} alt="itemImage" />
        </Link>
        <div className="tovar">
          <span className="tovar-title">{model}</span>
          <span className="tovar-title__small">Код товара</span>
          <span className="tovar-title__small">
            Литой , белый с полированной лицевой поверхностью
          </span>
          <div className="price price-box">
            <span>
              {price} <span className="currency">₽</span>
            </span>
          </div>
          <div className="price-b">
            <a className="price-button price-button__text">В корзину</a>
          </div>
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  tirePhoto: PropTypes.string,
  season: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
