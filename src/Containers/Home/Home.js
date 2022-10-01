import React from "react";
import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";
import OfferProduct from "../../Components/OfferProduct/OfferProduct";
import Products from "../../Components/Products/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Products />
      <OfferProduct />
    </div>
  );
};

export default Home;
