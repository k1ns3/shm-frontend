import React from 'react';

// Главная страница

import { Aside, ContentPage, Hero } from '../components';

function Home() {
  return (
    <div>
      <Hero />
      <Aside />
      <ContentPage
        sortItems={['по умолчанию', 'возрастанию цены', 'убыванию цены']}
      />
    </div>
  );
}

export default Home;
