import React from "react";

const Product = ({ img, title, price }) => {
  return (
    <div>
      <img src={img} />
      <br />
      <span>{title}</span>
      <br />
      <span>{price}</span>
    </div>
  );
};

export default Product;
