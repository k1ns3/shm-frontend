import React from 'react';
import { Link } from 'react-router-dom';

// Выпадающее меню, блок телефонов

function NavBar({ menuItems }) {
  const [activeMenuButton, setActiveMenuButton] = React.useState(false);
  const menuRef = React.useRef();

  const toggleMenuButton = () => {
    setActiveMenuButton(!activeMenuButton);
  };

  function handleOutsideClick(event) {
    !event.path.includes(menuRef.current) && setActiveMenuButton(false);
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div>
      <div className={!activeMenuButton ? 'menu' : 'menu menu_active'}>
        <div className="container">
          <nav className="menu__nav">
            {menuItems &&
              menuItems.map((item) => (
                <Link
                  onClick={() => setActiveMenuButton(false)}
                  key={item.id}
                  to={item.link}
                  className="menu__link">
                  {item.title}
                </Link>
              ))}
          </nav>
        </div>
      </div>
      <div className="navBar">
        <div className="container">
          <div className="navBar-wrap">
            <button
              ref={menuRef}
              onClick={toggleMenuButton}
              className="menu-button navBar__menu-button">
              <span className="menu-button__line" />
              <span className="menu-button__line" />
              <span className="menu-button__line" />
            </button>
            <div className="logo navBar__logo">
              <strong className="logo__text">РемШинМонтаж</strong>
              <span className="logo__desk">Шиномонтажка в центре №1</span>
            </div>
            <div className="navBar__mobile">
              <a className="navBar__phone" href="tel:89650274397">
                8 (965) 027-43-97
              </a>
              <span className="navBar_work-time navBar__small-text">
                ПН-ВС: с 9:00 до 20:00
              </span>
            </div>
            <div className="navBar__mobile1">
              <a className="navBar__phone" href="tel:89218914979">
                8 (921) 891-49-79
              </a>
              <a
                className="navBar_email navBar__small-text"
                href="mailto:Remshinmontage@gmail.com">
                Remshinmontage@gmail.com
              </a>
            </div>
            <Link to="/cart" className="button-o navBar__button">
              Товаров в корзине
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
