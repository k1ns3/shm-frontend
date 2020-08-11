import React from 'react';
import { Aside, ContentPage, Hero } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { asideFilterItems, sortItems } from '../assets/constants/constants';
import { fetchTires } from '../redux/actions/tires';

// Главная страница

function Home() {
  const items = useSelector(({ tires }) => tires.items);
  const dispatch = useDispatch();

  console.log(items);

  React.useEffect(() => {
    if (!items.length) {
      dispatch(fetchTires());
    }
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <Aside asideFiltersItems={asideFilterItems} />
      <ContentPage sortItems={sortItems} items={items} />
    </div>
  );
}

export default Home;
