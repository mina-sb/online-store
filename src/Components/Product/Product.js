import React, { useState } from "react";
import "./Product.scss";
import { VscSync, VscPackage, VscPaintcan } from "react-icons/vsc";

const Product = ({ firstImg, secondImg, title, price }) => {
  const [img, setImg] = useState(false);
  const changeImg = () => {
    setImg(!img);
  };

  return (
    <div className="product">
      <div className="img-box">
        <img src={firstImg} />
      </div>
      <div className="btn-list">
        <div className="item">
          <VscSync />
        </div>
        <div className="item">
          <VscPackage />
        </div>
        <div className="item">
          <VscPaintcan />
        </div>
      </div>
      <h4 className="product-title">{title.slice(0, 20)}</h4>
      <span className="product-price">{price + "$"}</span>
    </div>
  );
};

export default Product;
