import React, { useContext } from "react";
import Products from "../Products/Products";
import "./SearchResults.scss";
import { AppContext } from "../../AppContext";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const { serachPhrase, navColor } = useContext(AppContext);
  const [phrase, setPhrase] = serachPhrase;
  const [navBg, setNavBg] = navColor;

  const location = useLocation();
  if (location.pathname.includes("/search")) {
    setNavBg(false);
  }

  return (
    <div className="search-results">
      <h3 className="search-result-h3">
        `YOUR SEARCH FOR '{phrase}' REVEALED THE FOLLOWING:`
      </h3>
      <Products />
    </div>
  );
};

export default SearchResults;
