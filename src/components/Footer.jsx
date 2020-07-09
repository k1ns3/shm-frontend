import React from 'react';

function Footer() {
  return (
    <div className="container">
      <div className="centered">
        <div className="first-row">
          <div className="first">
            <div className="title">Телефоны</div>
            <div className="ya-phone-1">
              <span className="ya-phone-1">8 (965) 027-43-97</span>
            </div>
            <div className="ya-phone-2">
              <span className="ya-phone-2">8 (921) 891-49-79</span>
            </div>
          </div>
          <div className="twice">
            <div className="title">Социальные сети</div>
            <div className="icons">
              <a href="https://vk.com/remshinmontagh">
                <img
                  className="ig"
                  src="img/icons/icons8-вконтакте-filled.svg"
                  alt="vk"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="hr">
          <span className="hr__line"></span>
        </div>
        <div className="second-row">
          <div className="first">
            <div className="title">РемШинМонтаж</div>
          </div>
          <div className="twice">
            <div className="title">Способы оплаты</div>
            <div className="icons">
              <a href="#">
                <img
                  className="ig"
                  src="https://toplogos.ru/images/thumbs/preview-logo-mastercard.png"
                  alt="mastercard"
                />
              </a>
              <a href="#">
                <img
                  className="ig"
                  src="https://toplogos.ru/images/thumbs/preview-logo-visa.png"
                  alt="visa"
                />
              </a>
              <a href="#">
                <img
                  className="ig"
                  src="https://toplogos.ru/images/thumbs/preview-logo-mir.png"
                  alt="mir"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
