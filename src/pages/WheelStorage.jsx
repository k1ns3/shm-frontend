import React from 'react';

import { Spez } from '../assets/img';

function WheelStorage() {
  return (
    <div class="cart">
      <div class="container">
        <div class="safe">
          <div class="safe-block">
            <div class="safe-block-title">Сезонное хранение</div>
            <img src={Spez} alt="safe-logo" class="safe-block-img" />
            <div class="safe-block-items">
              Услуга сезонного хранения (легковой автомобиль) 6 мес.{' '}
              <span class="safe-block-title_other">от 2500 руб.</span>
            </div>
            <div class="safe-block-items">
              Услуга сезонного хранения (внедорожник, кроссовер) 6 мес.{' '}
              <span class="safe-block-title_other">от 3000 руб.</span>
            </div>
            <div class="safe-block-items">
              Услуга сезонного хранения (легковой автомобиль) 1 мес.
              <span class="safe-block-title_other">от 500 руб.</span>
            </div>
            <div class="safe-block-items">
              Услуга сезонного хранения (внедорожник, кроссовер) 1 мес.{' '}
              <span class="safe-block-title_other">от 500 руб.</span>
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
