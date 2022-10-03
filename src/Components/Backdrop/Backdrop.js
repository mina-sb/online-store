import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import "./Backdrop.scss";

const Backdrop = () => {
  const { showCart, backdrop, searchState } = useContext(AppContext);
  const [cartState, setCartState] = showCart;
  const [backdropState, setbackdropState] = backdrop;
  const [search, setSearch] = searchState;

  const closeBackdrop = () => {
    setCartState(false);
    setbackdropState(false);
    setSearch(false);
  };
  return <div className="backdrop" onClick={closeBackdrop}></div>;
};

export default Backdrop;
