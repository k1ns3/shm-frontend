import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="menu">
        <div className="container">
          <nav className="menu__nav">
            <a href="index.html" className="menu__link">
              Главная
            </a>
            <a href="shin.html" className="menu__link">
              Шиномонтаж
            </a>
            <a href="safe.html" className="menu__link">
              Сезонное хранение
            </a>
            <a href="doshipovka.html" className="menu__link">
              Дошиповка
            </a>
            <a href="#" className="menu__link">
              О компании
            </a>
            <a href="info.html" className="menu__link">
              Информация
            </a>
            <a href="#" className="menu__link">
              Контакты
            </a>
          </nav>
        </div>
      </div>
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
                href="mailto:Remshinmontage@gmail.com"
              >
                Remshinmontage@gmail.com
              </a>
            </div>
            <a className="button-o navbar__button" href="cart.html">
              Товаров в корзине
            </a>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="container">
          <h1 className="hero__title">Выездной шиномонтаж</h1>
          <span className="hero__subtitle">от 2 000 р</span>
          <button className="button hero__button">Заказать шиномонтаж</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
