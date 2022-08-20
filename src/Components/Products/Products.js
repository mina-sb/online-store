import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await fetch(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=30"
    );
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {products.map((item) => (
        <Product img={item.images[0]} title={item.title} price={item.price} />
      ))}
    </div>
  );
};

export default Products;
