import React from "react";
import { useNavigate } from "react-router-dom";
import Product from "../../components/Product/Product";
import ProductImg from "../../images/product.svg";
import "./Products.css";

export default function Products() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: " Смартфон Apple IPhone 14 Pro Max 512Gb, золотой",
      img: ProductImg,
      discount: "-10%",
      priceCommon: 150000,
      priceDiscount: 135000,
    },
    {
      id: 2,
      title: " Смартфон Apple IPhone 13 126Gb, золотой",
      img: ProductImg,
      discount: "-15%",
      priceCommon: 130000,
      priceDiscount: 110500,
    },
    {
      id: 3,
      title: " Смартфон Apple IPhone 12 256Gb, золотой",
      img: ProductImg,
      discount: "-8%",
      priceCommon: 110000,
      priceDiscount: 101200,
    },
    {
      id: 4,
      title: " Смартфон Apple IPhone 11 Mini 256Gb, золотой",
      img: ProductImg,
      discount: "-10%",
      priceCommon: 100000,
      priceDiscount: 90000,
    },
  ];

  const exit = () => navigate("/");
  const goTable = () => navigate("/table");

  return (
    <>
      <button className="btn__cards out" onClick={exit}>Выйти</button>
      <button className="btn__cards" onClick={goTable}>Таблица</button>
      <div className="cards">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </>
  );
}
