import React from 'react';

import { Spez } from '../assets/img';

function WheelStorage() {
  return (
    <div className="cart">
      <div className="container">
        <div className="safe">
          <div className="safe-block">
            <div className="safe-block-title">Сезонное хранение</div>
            <img src={Spez} alt="safe-logo" className="safe-block-img" />
            <div className="safe-block-items">
              Услуга сезонного хранения (легковой автомобиль) 6 мес.{' '}
              <span className="safe-block-title_other">от 2500 руб.</span>
            </div>
            <div className="safe-block-items">
              Услуга сезонного хранения (внедорожник, кроссовер) 6 мес.{' '}
              <span className="safe-block-title_other">от 3000 руб.</span>
            </div>
            <div className="safe-block-items">
              Услуга сезонного хранения (легковой автомобиль) 1 мес.
              <span className="safe-block-title_other">от 500 руб.</span>
            </div>
            <div className="safe-block-items">
              Услуга сезонного хранения (внедорожник, кроссовер) 1 мес.{' '}
              <span className="safe-block-title_other">от 500 руб.</span>
            </div>
            <p>Шины хранятся на нашем собственном складе.</p>
            <p>Каждое колесо опломбировано ( гарантия не использования).</p>
            <p>Возможность в любое время забрать шины/колеса со склада.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WheelStorage;
