import React from "react";

import { Menu, Navbar, Hero, Aside, ContentPage } from "./components";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header className="header">
        <Menu />
        <Navbar />
        <Hero />
      </header>
      <main>
        <Aside />
        <ContentPage />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
