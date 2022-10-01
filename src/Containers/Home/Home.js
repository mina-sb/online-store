import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useLocation } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";
import OfferProduct from "../../Components/OfferProduct/OfferProduct";
import Products from "../../Components/Products/Products";
import "./Home.scss";

const Home = () => {
  const { navColor } = useContext(AppContext);
  const [navBg, setNavBg] = navColor;
  const location = useLocation();
  if (location.pathname === "/detail") {
    setNavBg(true);
  }

  return (
    <div className="home">
      <Banner />
      <Features />
      <h3>FERNITURE</h3>
      <Products limit={28} />
      <OfferProduct />
    </div>
  );
};

export default Home;
