import React from 'react';
import { Aside, ContentPage, Hero } from '../components';
import { useSelector } from 'react-redux';

// Главная страница

function Home() {
  const items = useSelector(({ tires }) => tires.items);

  return (
    <div>
      <Hero />
      <Aside />
      <ContentPage
        sortItems={[
          { name: 'по умолчанию', type: 'popular' },
          { name: 'возрастанию цены', type: 'priceTop' },
          { name: 'убыванию цены', type: 'priceDown' },
        ]}
        items={items}
      />
    </div>
  );
}

export default Home;
