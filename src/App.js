import "./App.scss";
import React, { useContext } from "react";
import Backdrop from "./Components/Backdrop/Backdrop";
import Cart from "./Components/Cart/Cart";
import MainNav from "./Components/MainNav/MainNav";
import Detail from "./Components/Detail/Detail";
import { AppContext } from "./AppContext";
import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home";

function App() {
  const { showCart, backdrop } = useContext(AppContext);
  const [cartState, setCartState] = showCart;
  const [backdropState, setbackdropState] = backdrop;

  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      {backdropState ? <Backdrop /> : ""}
      <Cart />
    </div>
  );
}

export default App;
