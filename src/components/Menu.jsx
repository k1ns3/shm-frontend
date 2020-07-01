import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <div className="menu">
        <div className="container">
          <nav className="menu__nav">
            <Link to="/" className="menu__link">
              Главная
            </Link>
            <Link to="shinomontaj" className="menu__link">
              Шиномонтаж
            </Link>
            <Link to="/storage" className="menu__link">
              Сезонное хранение
            </Link>
            <Link to="#" className="menu__link">
              Дошиповка
            </Link>
            <Link to="#" className="menu__link">
              О компании
            </Link>
            <Link to="#" className="menu__link">
              Информация
            </Link>
            <Link to="#" className="menu__link">
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Menu;
