import React from 'react';

function TireFitting() {
  return (
    <div className="cart">
      <div className="container">
        <div className="shin">
          <div className="shin-block">
            <div className="shin-block__title">
              <span>
                Комплексная замена шин{' '}
                <span className="shin-block__title-other">от 1300 рублей*</span>
              </span>
              <ul>
                <li>Снятие, установка колёс</li>
                <li>Мойка колёс</li>
                <li>Балансировка колёс</li>
                <li>Демонтаж, монтаж шин</li>
                <li>Балансировка колёс</li>
                <li>Постановка колес на автомобиль</li>
              </ul>
              <span className="mfilter__line"></span>
              <p className="shin-block__title-small">
                Ниже приведены цены для легковых автомобилей
              </p>
              <span className="mfilter__line"></span>
            </div>
            {/*TODO: перекинуть в массив*/}
            <div className="shin-block__title-item">R13 - 1 300 руб</div>
            <div className="shin-block__title-item">R14 - 1 500 руб</div>
            <div className="shin-block__title-item">R15 - 1 800 руб</div>
            <div className="shin-block__title-item">R16 - 2 000 руб</div>
            <div className="shin-block__title-item">R17 - 2 300 руб</div>
            <div className="shin-block__title-item">R18 - 2 500 руб</div>
            <div className="shin-block__title-item">R19 - 2 800 руб</div>
            <div className="shin-block__title-item">R20 - 3 000 руб</div>
            <div className="shin-block__title-item">R21 - 3 300 руб</div>
            <div className="shin-block__title-item">R22 - 4 000 руб</div>
            <span className="mfilter__line"></span>
            <p className="shin-block__title-small">
              Ниже приведены цены для внедорожников, кроссоверов и минивенов
            </p>
            <span className="mfilter__line"></span>
            <div className="shin-block__title-item">R15 - 2 400 руб</div>
            <div className="shin-block__title-item">R16 - 2 400 руб</div>
            <div className="shin-block__title-item">R17 - 2 600 руб</div>
            <div className="shin-block__title-item">R18 - 2 800 руб</div>
            <div className="shin-block__title-item">R19 - 3 200 руб</div>
            <div className="shin-block__title-item">R20 - 3 500 руб</div>
            <div className="shin-block__title-item">R21 - 3 800 руб</div>
            <div className="shin-block__title-item">R22 - 4 500 руб</div>
            <span className="mfilter__line"></span>
            <p className="shin-block__title-small">Порошковая окраска дисков</p>
            <div className="shin-block__title-item">Диск 13" - 1 200 руб</div>
            <div className="shin-block__title-item">Диск 14" - 1 200 руб</div>
            <div className="shin-block__title-item">Диск 15" - 1 500 руб</div>
            <div className="shin-block__title-item">Диск 16" - 1 700 руб</div>
            <div className="shin-block__title-item">Диск 17" - 2 000 руб</div>
            <div className="shin-block__title-item">Диск 18" - 2 400 руб</div>
            <div className="shin-block__title-item">Диск 19" - 2 800 руб</div>
            <div className="shin-block__title-item">
              Диск 20" и выше - от 3 200 руб
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TireFitting;
