import "./App.scss";
import React, { useContext } from "react";
import Backdrop from "./Components/Backdrop/Backdrop";
import Cart from "./Components/Cart/Cart";
import Features from "./Components/Features/Features";
import OfferProduct from "./Components/OfferProduct/OfferProduct";
import Products from "./Components/Products/Products";
import Header from "./Containers/Header/Header";
import { AppContext } from "./AppContext";

function App() {
  const { showCart, backdrop } = useContext(AppContext);
  const [cartState, setCartState] = showCart;
  const [backdropState, setbackdropState] = backdrop;

  return (
    <div className="App">
      <Header />
      <Features />
      <Products />
      <OfferProduct />
      {backdropState ? <Backdrop /> : ""}
      <Cart />
    </div>
  );
}

export default App;
