import React from "react";
import "./Product.css";

export default function Product({ img, title, discount, priceCommon, priceDiscount }) {
  return (
    <div>
      {/* <!-- Карточка товара --> */}
      <div className="card">
        {/* <!-- Верхняя часть --> */}
        <div className="card__top">
          {/* <!-- Изображение-ссылка товара --> */}
          <a href="#" className="card__image">
            <img src={img} alt={title} />
          </a>
          {/* <!-- Скидка на товар --> */}
          <div className="card__label">{discount}</div>
        </div>
        {/* <!-- Нижняя часть --> */}
        <div className="card__bottom">
          {/* <!-- Цены на товар (с учетом скидки и без)--> */}
          <div className="card__prices">
            <div className="card__price card__price--discount">{priceDiscount}</div>
            <div className="card__price card__price--common">{priceCommon}</div>
          </div>
          {/* <!-- Ссылка-название товара --> */}
          <a href="#" className="card__title">
            {title}
          </a>
          {/* <!-- Кнопка добавить в корзину --> */}
          <button className="card__add">В корзину</button>
        </div>
      </div>
    </div>
  );
}
