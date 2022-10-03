import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { VscChromeClose } from "react-icons/vsc";
import { FaSistrix } from "react-icons/fa";

import "./Search.scss";
import { Navigate, useNavigate } from "react-router-dom";

const Search = () => {
  const {
    serachPhrase,
    backdrop,
    searchState,
    productsContext,
    searchResultArray,
    showSearchResultsFlag,
  } = useContext(AppContext);
  const [search, setSearch] = searchState;
  const [backdropState, setBackdropState] = backdrop;
  const [products, setProducts] = productsContext;
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = searchResultArray;
  const [showSearchResults, setShowSearchResults] = showSearchResultsFlag;
  const [phrase, setPhrase] = serachPhrase;

  const navigate = useNavigate();

  const closeSearch = () => {
    setSearch(false);
    setBackdropState(false);
  };
  const searchProducts = () => {
    setPhrase(input);
    let tempArr = products.filter((item) => {
      return item.title.toLowerCase().includes(input.toLowerCase());
    });
    console.log(tempArr.length);

    setSearchResult(tempArr);
    console.log(searchResult.length);
    navigate("/search");
    setShowSearchResults(true);
    setSearch(false);
    setBackdropState(false);
  };

  return (
    <div className={`search-container ${search ? "show" : ""}`}>
      <div className="search">
        <div>
          <input
            className="search-input"
            placeholder="SEARCH ANYTHING"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <FaSistrix className="search-icon" onClick={searchProducts} />
        </div>
        <VscChromeClose className="close-search-btn" onClick={closeSearch} />
      </div>

      <div></div>
    </div>
  );
};

export default Search;
