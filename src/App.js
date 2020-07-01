import React from 'react';
import { Route } from 'react-router-dom';

import { Menu, Navbar, Footer } from './components';
import { Home, TireFitting, WheelStorage } from './pages';

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
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
