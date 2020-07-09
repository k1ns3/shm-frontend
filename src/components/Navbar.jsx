import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrap">
          <button className="menu-button navbar__menu-button">
            <span className="menu-button__line"></span>
            <span className="menu-button__line"></span>
            <span className="menu-button__line"></span>
          </button>
          <div className="logo navbar__logo">
            <strong className="logo__text">РемШинМонтаж</strong>
            <span className="logo__desk">Шиномонтажка в центре №1</span>
          </div>
          <div className="navbar__mobile">
            <a className="navbar__phone" href="tel:89650274397">
              8 (965) 027-43-97
            </a>
            <span className="navbar_work-time navbar__small-text">
              ПН-ВС: с 9:00 до 20:00
            </span>
          </div>
          <div className="navbar__mobile1">
            <a className="navbar__phone" href="tel:89218914979">
              8 (921) 891-49-79
            </a>
            <a
              className="navbar_email navbar__small-text"
              href="mailto:Remshinmontage@gmail.com">
              Remshinmontage@gmail.com
            </a>
          </div>
          <Link to="/cart" className="button-o navbar__button">
            Товаров в корзине
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
