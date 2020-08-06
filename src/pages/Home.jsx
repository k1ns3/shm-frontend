import React from 'react';
import { Aside, ContentPage, Hero } from '../components';
import { useSelector } from 'react-redux';
import { asideFilterItems, sortItems } from '../assets/constants/constants';

// Главная страница

function Home() {
  const items = useSelector(({ tires }) => tires.items);

  return (
    <div>
      <Hero />
      <Aside asideFiltersItems={asideFilterItems} />
      <ContentPage sortItems={sortItems} items={items} />
    </div>
  );
}

export default Home;
