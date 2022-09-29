import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.scss";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await fetch(
      "https://api.escuelajs.co/api/v1/products?limit=28&offset=54"
    );
    const data = await res.json();
    console.log(data);
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
      <h3>FERNITURE</h3>
      <div className="products-list">
        {products.map((item) => (
          <Product
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
