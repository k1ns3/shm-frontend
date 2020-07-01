import React from 'react';

import { Ice, Sun, wheelf32 } from '../assets/img';

function ContentPage() {
  return (
    <div>
      <content className="main">
        <div className="container">
          <div className="main-block">
            <div className="main-top">
              <div className="topmenu">
                <div className="container">
                  <nav className="topmenu__nav">
                    <div className="spoiler">
                      <details>
                        <summary className="topmenu__link">Товар</summary>
                        <div className="mfilter-options">
                          <div className="mfilter-options__scroll">
                            <div className="mfilter-option">
                              <div className="mfilter-option row__radiobutton">
                                <label htmlFor="1">
                                  <input name="search" id="1" type="radio" />
                                  <label>Д</label>иски
                                </label>
                              </div>
                              <div className="mfilter-option row__radiobutton">
                                <label htmlFor="2">
                                  <input name="search" id="2" type="radio" />
                                  <label>Ш</label>ины
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                    <div className="spoiler">
                      <details>
                        <summary className="topmenu__link">Сезон</summary>
                        <div className="mfilter-options">
                          <div className="mfilter-options__scroll">
                            <div className="mfilter-option">
                              <div className="mfilter-option mfilter__radiobutton">
                                <label htmlFor="3">
                                  <input name="season" id="3" type="radio" />
                                  <label>Л</label>ето
                                </label>
                              </div>
                              <div className="mfilter-option mfilter__radiobutton">
                                <label htmlFor="4">
                                  <input name="season" id="4" type="radio" />
                                  <label>З</label>има
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                    <div className="spoiler">
                      <details>
                        <summary className="topmenu__link">Ширина</summary>
                        <div className="mfilter-options">
                          <div className="mfilter-options__scroll">
                            <div className="mfilter-options__scroll-left">
                              <div className="mfilter-option">
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="0">
                                    <input name="width" id="0" type="radio" />
                                    <label>3</label>8
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="5">
                                    <input name="width" id="5" type="radio" />
                                    <label>3</label>9
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="6">
                                    <input name="width" id="6" type="radio" />
                                    <label>4</label>0
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="7">
                                    <input name="width" id="7" type="radio" />
                                    <label>1</label>45
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="8">
                                    <input name="width" id="8" type="radio" />
                                    <label>1</label>55
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="9">
                                    <input name="width" id="9" type="radio" />
                                    <label>1</label>65
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="10">
                                    <input name="width" id="10" type="radio" />
                                    <label>1</label>75
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="11">
                                    <input name="width" id="11" type="radio" />
                                    <label>1</label>95
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="12">
                                    <input name="width" id="12" type="radio" />
                                    <label>2</label>05
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="13">
                                    <input name="width" id="13" type="radio" />
                                    <label>2</label>15
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="14">
                                    <input name="width" id="14" type="radio" />
                                    <label>2</label>25
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="15">
                                    <input name="width" id="15" type="radio" />
                                    <label>2</label>25
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="16">
                                    <input name="width" id="16" type="radio" />
                                    <label>2</label>35
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="17">
                                    <input name="width" id="17" type="radio" />
                                    <label>2</label>45
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="18">
                                    <input name="width" id="18" type="radio" />
                                    <label>2</label>55
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="19">
                                    <input name="width" id="19" type="radio" />
                                    <label>2</label>65
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="20">
                                    <input name="width" id="20" type="radio" />
                                    <label>2</label>75
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="21">
                                    <input name="width" id="21" type="radio" />
                                    <label>2</label>85
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="mfilter-options__scroll-right">
                              <div className="mfilter-option">
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="22">
                                    <input name="width" id="22" type="radio" />
                                    <label>2</label>85
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="23">
                                    <input name="width" id="23" type="radio" />
                                    <label>2</label>95
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="24">
                                    <input name="width" id="24" type="radio" />
                                    <label>3</label>05
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="25">
                                    <input name="width" id="25" type="radio" />
                                    <label>3</label>15
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="26">
                                    <input name="width" id="26" type="radio" />
                                    <label>3</label>25
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="27">
                                    <input name="width" id="27" type="radio" />
                                    <label>3</label>35
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="28">
                                    <input name="width" id="28" type="radio" />
                                    <label>3</label>45
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="29">
                                    <input name="width" id="29" type="radio" />
                                    <label>3</label>55
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                    <div className="spoiler">
                      <details>
                        <summary className="topmenu__link">Высота</summary>
                        <div className="mfilter-options">
                          <div className="mfilter-options__scroll">
                            <div className="mfilter-options__scroll-left">
                              <div className="mfilter-option">
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="30">
                                    <input name="height" id="30" type="radio" />
                                    <label>9</label>.5
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="31">
                                    <input name="height" id="31" type="radio" />
                                    <label>1</label>2.5
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="mfilter-options__scroll-right">
                              <div className="mfilter-option">
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="32">
                                    <input name="height" id="32" type="radio" />
                                    <label>1</label>0.5
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="33">
                                    <input name="height" id="33" type="radio" />
                                    <label>1</label>3.5
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                    <div className="spoiler">
                      <details>
                        <summary className="topmenu__link">Диаметр</summary>
                        <div className="mfilter-options">
                          <div className="mfilter-options__scroll">
                            <div className="mfilter-options__scroll-left">
                              <div className="mfilter-option">
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="34">
                                    <input
                                      name="diameter"
                                      id="34"
                                      type="radio"
                                    />
                                    <label>1</label>2
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="35">
                                    <input
                                      name="diameter"
                                      id="35"
                                      type="radio"
                                    />
                                    <label>1</label>4
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="mfilter-options__scroll-right">
                              <div className="mfilter-option">
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="36">
                                    <input
                                      name="diameter"
                                      id="36"
                                      type="radio"
                                    />
                                    <label>1</label>3
                                  </label>
                                </div>
                                <div className="mfilter-option mfilter__radiobutton">
                                  <label htmlFor="37">
                                    <input
                                      name="diameter"
                                      id="37"
                                      type="radio"
                                    />
                                    <label>1</label>5
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                    <div className="spoiler">
                      <details>
                        <summary className="topmenu__link">RunFlat</summary>
                        <p>Хуй</p>
                      </details>
                    </div>
                    <div className="row">
                      <div className="row_button">
                        <input type="submit" className="button" value="Найти" />
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <button className="topmenu-button navbar__menu-button">
                <span className="topmenu-button__line"></span>
                <span className="topmenu-button__line"></span>
                <span className="topmenu-button__line"></span>
              </button>
              <div className="main-top__content">
                <div className="sort">
                  <div className="sort_top">
                    <span className="sort_top-header">Сортировать</span>
                    <a className="sort_top-content__active_top" href="#">
                      по умолчанию
                    </a>
                    <a className="sort_top-content" href="#">
                      возрастанию цены
                    </a>
                    <a className="sort_top-content" href="#">
                      убыванию цены
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container"></div>
            <div className="catalog">
              <div className="product-container">
                <img className="product-img__ice" src={Ice} alt="ice" />
                <div className="product">
                  <a href="more.html">
                    <img className="product-img" src={wheelf32} alt="" />
                  </a>
                  <div className="tovar">
                    <span className="tovar-title">NZ F-32</span>
                    <span className="tovar-title__small">Код товара</span>
                    <span className="tovar-title__small">
                      Литой , белый с полированной лицевой поверхностью
                    </span>
                    <div className="price price-box">
                      <span>
                        12 190 <span className="currency">₽</span>
                      </span>
                    </div>
                    <div className="price-b">
                      <a className="price-button price-button__text" href="#">
                        В корзину
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-container">
                <img className="product-img__sun" src={Sun} alt="sun" />
                <div className="product">
                  <a href="more.html">
                    <img className="product-img" src={wheelf32} alt="" />
                  </a>
                  <div className="tovar">
                    <span className="tovar-title">NZ F-32</span>
                    <span className="tovar-title__small">Код товара</span>
                    <span className="tovar-title__small">
                      Литой , белый с полированной лицевой поверхностью
                    </span>
                    <div className="price price-box">
                      <span>
                        12 190 <span className="currency">₽</span>
                      </span>
                    </div>
                    <div className="price-b">
                      <a className="price-button price-button__text" href="#">
                        В корзину
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-container">
                <div className="product">
                  <a href="more.html">
                    <img className="product-img" src={wheelf32} alt="" />
                  </a>
                  <div className="tovar">
                    <span className="tovar-title">NZ F-32</span>
                    <span className="tovar-title__small">Код товара</span>
                    <span className="tovar-title__small">
                      Литой , белый с полированной лицевой поверхностью
                    </span>
                    <div className="price price-box">
                      <span>
                        12 190 <span className="currency">₽</span>
                      </span>
                    </div>
                    <div className="price-b">
                      <a className="price-button price-button__text" href="#">
                        В корзину
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="catalog">
              <div className="product-container">
                <div className="product">
                  <a href="more.html">
                    <img className="product-img" src={wheelf32} alt="" />
                  </a>
                  <div className="tovar">
                    <span className="tovar-title">NZ F-32</span>
                    <span className="tovar-title__small">Код товара</span>
                    <span className="tovar-title__small">
                      Литой , белый с полированной лицевой поверхностью
                    </span>
                    <div className="price price-box">
                      <span>
                        12 190 <span className="currency">₽</span>
                      </span>
                    </div>
                    <div className="price-b">
                      <a className="price-button price-button__text" href="#">
                        В корзину
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-container">
                <div className="product">
                  <a href="more.html">
                    <img className="product-img" src={wheelf32} alt="" />
                  </a>
                  <div className="tovar">
                    <span className="tovar-title">NZ F-32</span>
                    <span className="tovar-title__small">Код товара</span>
                    <span className="tovar-title__small">
                      Литой , белый с полированной лицевой поверхностью
                    </span>
                    <div className="price price-box">
                      <span>
                        12 190 <span className="currency">₽</span>
                      </span>
                    </div>
                    <div className="price-b">
                      <a className="price-button price-button__text" href="#">
                        В корзину
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-container">
                <div className="product">
                  <a href="more.html">
                    <img className="product-img" src={wheelf32} alt="" />
                  </a>
                  <div className="tovar">
                    <span className="tovar-title">NZ F-32</span>
                    <span className="tovar-title__small">Код товара</span>
                    <span className="tovar-title__small">
                      Литой , белый с полированной лицевой поверхностью
                    </span>
                    <div className="price price-box">
                      <span>
                        12 190 <span className="currency">₽</span>
                      </span>
                    </div>
                    <div className="price-b">
                      <a className="price-button price-button__text" href="#">
                        В корзину
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-bottom">
              <div className="main-top__content">
                <div className="sort">
                  <a className="sort-content__active_bottom" href="#">
                    1
                  </a>
                  <a className="sort-content" href="#">
                    2
                  </a>
                  <a className="sort-content" href="#">
                    3
                  </a>
                  <a className="sort-content" href="#">
                    4
                  </a>
                  <a className="sort-content" href="#">
                    5
                  </a>
                  <a className="main-button main-button__text" href="#">
                    Далее
                  </a>
                </div>
                <div className="limit top">
                  <span className="top-header">Показать</span>
                  <a className="top-content__active" href="#">
                    60
                  </a>
                  <a className="top-content" href="#">
                    120
                  </a>
                  <a className="top-content" href="#">
                    240
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </content>
    </div>
  );
}

export default ContentPage;
