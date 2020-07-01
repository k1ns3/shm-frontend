import React from 'react';
import { Route } from 'react-router-dom';

import { Menu, Navbar, Footer } from './components';
import {
  Home,
  TireFitting,
  WheelStorage,
  CompanyInfo,
  WheelStudding,
  Cart,
} from './pages';

function App() {
  return (
    <div>
      <header className="header">
        <Menu />
        <Navbar />
      </header>
      <main>
        <Route path="/" component={Home} exact />
        <Route path="/shinomontaj" component={TireFitting} exact />
        <Route path="/storage" component={WheelStorage} exact />
        <Route path="/knitting" component={WheelStudding} exact />
        <Route path="/info" component={CompanyInfo} exact />
        <Route path="/Cart" component={Cart} exact />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
