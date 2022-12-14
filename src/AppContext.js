import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [navColor, setNavColor] = useState(true);
  const [search, setSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchResultArray, setSearchResultArray] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [leftmenu, setLeftmenu] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({ id: -1 });

  return (
    <AppContext.Provider
      value={{
        showCart: [showCart, setShowCart],
        backdrop: [backdrop, setBackdrop],
        cartContext: [cart, setCart],
        cartTotalPrice: [totalPrice, setTotalPrice],
        navColor: [navColor, setNavColor],
        searchState: [search, setSearch],
        productsContext: [products, setProducts],
        searchResultArray: [searchResultArray, setSearchResultArray],
        showSearchResultsFlag: [showSearchResults, setShowSearchResults],
        serachPhrase: [phrase, setPhrase],
        loginState: [showLogin, setShowLogin],
        leftmenuState: [leftmenu, setLeftmenu],
        wishlistContext: [wishlist, setWishlist],
        quickview: [selectedProduct, setSelectedProduct],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
