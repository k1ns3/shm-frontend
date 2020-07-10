import React from 'react';
import { wheelf32 } from '../assets/img';
import { Link } from 'react-router-dom';

const ProductCard = ({ tireType }) => {
  return (
    <div className="product-container">
      <img className="product-img__ice" src={tireType} alt="ice" />
      <div className="product">
        <Link to="carditem">
          <img className="product-img" src={wheelf32} alt="itemImage" />
        </Link>
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
            <a className="price-button price-button__text">В корзину</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
