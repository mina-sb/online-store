import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import "./Backdrop.scss";

const Backdrop = () => {
  const {
    showCart,
    backdrop,
    searchState,
    loginState,
    leftmenuState,
    quickview,
  } = useContext(AppContext);
  const [cartState, setCartState] = showCart;
  const [backdropState, setbackdropState] = backdrop;
  const [search, setSearch] = searchState;
  const [showLogin, setShowLogin] = loginState;
  const [leftmenu, setLeftmenu] = leftmenuState;
  const [selectedProduct, setSelectedProduct] = quickview;

  const closeBackdrop = () => {
    setCartState(false);
    setbackdropState(false);
    setSearch(false);
    setShowLogin(false);
    setLeftmenu(false);
    setSelectedProduct({ id: -1 });
  };
  return <div className="backdrop" onClick={closeBackdrop}></div>;
};

export default Backdrop;
