import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";
import Product from "../Product/Product";
import "./Products.scss";

const Products = (props) => {
  const { productsContext, searchResultArray, showSearchResultsFlag } =
    useContext(AppContext);
  const [products, setProducts] = productsContext;
  const [searchResult, setSearchResult] = searchResultArray;
  const [showSearchResults, setShowSearchResults] = showSearchResultsFlag;
  const [source, setSource] = useState([]);

  const getData = async () => {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products?limit=${props.limit}&offset=54`
    );
    const data = await res.json();
    setProducts(data);
    setSource(data);

    // fetch("https://fakestoreapi.com/products")
    // .then((res) => res.json())
    // .then((data) => {
    //  setProducts(data);
    // });
  };

  useEffect(() => {
    if (!showSearchResults) {
      console.log("show products");
      getData();
    } else {
      setSource(searchResult);
      console.log("show results");
    }
  }, [searchResult, showSearchResults]);

  return (
    <div className="products">
      <div className="products-list">
        {source.map((item) => (
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
