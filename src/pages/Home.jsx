import React from 'react';

// Главная страница

import { Aside, ContentPage, Hero } from '../components';

function Home() {
  const [tires, setTires] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/tireDataBase.json').then((response) =>
      response.json().then((data) => setTires(data.tires))
    );
  }, []);
  return (
    <div>
      <Hero />
      <Aside />
      <ContentPage
        sortItems={['по умолчанию', 'возрастанию цены', 'убыванию цены']}
        items={tires}
      />
    </div>
  );
}

export default Home;
