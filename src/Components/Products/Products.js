import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    //const res = await fetch("https://api.escuelajs.co/api/v1/products");
    //const data = await res.json();
    //setProducts(data.results);

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {products.map((item) => (
        <Product img={item.image} title={item.title} />
      ))}
    </div>
  );
};

export default Products;
