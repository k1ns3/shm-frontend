import React from "react";

function Menu() {
  return (
    <div>
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
    </div>
  );
}

export default Menu;
