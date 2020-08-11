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
import { menuLinks } from './assets/constants/constants';

function App() {
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
