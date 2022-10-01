import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import "./Products.scss";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products?limit=${props.limit}&offset=54`
    );
    const data = await res.json();
    setProducts(data);

    // fetch("https://fakestoreapi.com/products")
    // .then((res) => res.json())
    // .then((data) => {
    //  setProducts(data);
    // });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="products">
      <div className="products-list">
        {products.map((item) => (
          <Product
            id={item.id}
            firstImg={item.images[0]}
            secondImg={item.images[1]}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
