import React from 'react';
import { Aside, ContentPage, Hero } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setTires } from '../redux/actions/tires';

// Главная страница

function Home() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ tires }) => {
    return {
      items: tires.items,
    };
  });

  React.useEffect(() => {
    fetch('http://localhost:3000/tireDataBase.json').then((response) =>
      response.json().then((data) => dispatch(setTires(data.tires)))
    );
  }, []);

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
