import "./App.scss";
import React, { useContext } from "react";
import Backdrop from "./Components/Backdrop/Backdrop";
import Cart from "./Components/Cart/Cart";
import MainNav from "./Components/MainNav/MainNav";
import Detail from "./Components/Detail/Detail";
import { AppContext } from "./AppContext";
import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Search from "./Components/Search/Search";
import Products from "./Components/Products/Products";
import SearchResults from "./Containers/SearchResults/SearchResults";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import LeftSideMenu from "./Components/LeftSideMenu/LeftSideMenu";

function App() {
  const { showCart, backdrop, searchState } = useContext(AppContext);
  const [cartState, setCartState] = showCart;
  const [backdropState, setbackdropState] = backdrop;
  const [search, setSearch] = searchState;

  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      {backdropState ? <Backdrop /> : ""}
      <Cart />
      <LeftSideMenu />
      <Search />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
