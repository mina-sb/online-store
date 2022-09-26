import React from "react";

const Product = ({ img, title }) => {
  return (
    <div>
      <img src={img} />
      <br />
      <span>{title}</span>
      <br />
    </div>
  );
};

export default Product;
