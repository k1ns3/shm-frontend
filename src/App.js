import React from 'react';
import { Route } from 'react-router-dom';

import { NavBar, Footer } from './components';
import {
  Home,
  TireFitting,
  WheelStorage,
  CompanyInfo,
  WheelStudding,
  Cart,
  ProductCardDescription,
} from './pages';
import { setTires } from './redux/actions/tires';
import { useDispatch } from 'react-redux';

const menuLinks = [
  {
    id: 0,
    link: '/',
    title: 'Главная',
  },
  {
    id: 1,
    link: '/mounting',
    title: 'Шиномонтаж',
  },
  {
    id: 2,
    link: '/storage',
    title: 'Сезонное хранение',
  },
  {
    id: 3,
    link: '/knitting',
    title: 'Дошиповка',
  },
  {
    id: 4,
    link: '#',
    title: 'О компании',
  },
  {
    id: 5,
    link: '/info',
    title: 'Информация',
  },
  {
    id: 6,
    link: '#',
    title: 'Контакты',
  },
];

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch('http://localhost:3000/tireDataBase.json').then((response) =>
      response.json().then((data) => dispatch(setTires(data.tires)))
    );
  }, [dispatch]);
  return (
    <div>
      <header className="header">
        <NavBar menuItems={menuLinks} />
      </header>
      <main>
        <Route path="/" component={Home} exact />
        <Route path="/mounting" component={TireFitting} exact />
        <Route path="/storage" component={WheelStorage} exact />
        <Route path="/knitting" component={WheelStudding} exact />
        <Route path="/info" component={CompanyInfo} exact />
        <Route path="/Cart" component={Cart} exact />
        <Route path="/item" component={ProductCardDescription} exact />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
