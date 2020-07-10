import React from 'react';

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
