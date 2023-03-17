import React from "react";
import "./Product.css";

export default function Product({ img, title, discount, priceCommon, priceDiscount }) {
  return (
    <div>
      {/* <!-- Карточка товара --> */}
      <div class="card">
        {/* <!-- Верхняя часть --> */}
        <div class="card__top">
          {/* <!-- Изображение-ссылка товара --> */}
          <a href="#" class="card__image">
            <img src={img} alt={title} />
          </a>
          {/* <!-- Скидка на товар --> */}
          <div class="card__label">{discount}</div>
        </div>
        {/* <!-- Нижняя часть --> */}
        <div class="card__bottom">
          {/* <!-- Цены на товар (с учетом скидки и без)--> */}
          <div class="card__prices">
            <div class="card__price card__price--discount">{priceDiscount}</div>
            <div class="card__price card__price--common">{priceCommon}</div>
          </div>
          {/* <!-- Ссылка-название товара --> */}
          <a href="#" class="card__title">
            {title}
          </a>
          {/* <!-- Кнопка добавить в корзину --> */}
          <button class="card__add">В корзину</button>
        </div>
      </div>
    </div>
  );
}
