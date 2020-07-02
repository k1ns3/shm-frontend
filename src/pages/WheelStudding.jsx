import React from 'react';

import { wheelQuatro } from '../assets/img';

function WheelStudding() {
  return (
    <div className="cart">
      <div className="container">
        <div className="doship">
          <div className="doship-block">
            <div className="doship-block__row">
              <img src={wheelQuatro} className="doship-block__img" />
              <ul>
                <li>
                  увеличенный диаметр корпуса и основного фланца для надёжного
                  удержания в резине протектора
                </li>
                <li>комбинированная конструкция шипа для уменьшения веса</li>
                <li>
                  полимерная оболочка шипа выполнена из материала с повышенным
                  коэффициентом износа
                </li>
              </ul>
            </div>
            <span className="doship-block__title">Преимущества</span>
            <ul>
              <li>
                Безопасность
                <p className="doship-block__title-small">
                  наличие 100% шипов - это надежное сцепление с дорожным
                  покрытием в экстремальных ситуациях
                </p>
              </li>
              <li>
                Срок службы шины
                <p className="doship-block__title-small">
                  продлевается на 2 - 3 сезона
                </p>
              </li>
              <li>
                Экономичность
                <p className="doship-block__title-small">
                  нет необходимости покупать новый комплект шин из-за потери при
                  ещё "рабочем" протекторе
                </p>
              </li>
              <p className="doship-block__text">
                Процесс вторичной ошиповки аналогичен тому, что применяется при
                шиповании новой резины.
              </p>
              <p className="doship-block__text">
                ​Главное отличие — это форма ремонтного шипа, которая позволяет
                ему прочно удерживаться в старых и разбитых отверстиях.
                Уникальная форма шипа (патент № 98355), разработанная
                специалистами компании «Теком», гарантирует ему надежную
                фиксацию в резине протектора. Новая технология позволяет
                ошиповать б/у колеса, сохраняя необходимые характеристики и
                продлевая срок их службы! Это подтверждено тестами, проведенными
                на базе испытательной лаборатории «Теком» и на дорогах
                Северо-Запада. Тесты показали, что сила удержания ремонтного
                шипа в резине протектора такая же как и при заводской ошиповке.
                Длина тормозного пути по сравнению с оригинальными шипами
                остается неизменной.
              </p>
              <p className="doship-block__text">Стоимость ошиповки 15 руб./1шип</p>
              <p className="doship-block__text">
                <div className="doship-block__text-items">
                  Требования к б/у зимней автошине:
                </div>
                <div className="doship-block__text-items">
                  Автошина должна быть изначально ошипована
                  заводом-изготовителем.
                </div>
                <div className="doship-block__text-items">
                  Остаточный протектор не менее 7 мм.
                </div>
                <div className="doship-block__text-items">
                  Возраст шины не более 4-х лет (с даты изготовления).
                </div>
                <div className="doship-block__text-items">
                  Отверстия для посадочных мест шипа не должна иметь надрывов и
                  разрушений.
                </div>
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WheelStudding;
