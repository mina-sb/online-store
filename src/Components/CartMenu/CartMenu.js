import React, { useContext } from "react";
import "./CartMenu.scss";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { AppContext } from "../../AppContext";

const CartMenu = () => {
  const { showCart, backdrop, cartContext, searchState, loginState } =
    useContext(AppContext);
  const [cartState, setCartState] = showCart;
  const [backdropState, setbackdropState] = backdrop;
  const [cart, setCart] = cartContext;
  const [search, setSearch] = searchState;
  const [showLogin, setShowLogin] = loginState;

  const openCart = () => {
    setCartState(true);
    setbackdropState(true);
  };
  const openSearch = () => {
    setSearch(true);
    setbackdropState(true);
  };
  const openLogin = () => {
    setShowLogin(true);
    setbackdropState(true);
  };

  let total = 0;
  cart.map((item) => {
    total += item.count;
  });

  return (
    <div>
      <ul className="cart-menu">
        <li>
          <FiSearch onClick={openSearch} />
        </li>
        <li>
          <FiShoppingCart onClick={openCart} className="cart-icon" />
          <span className="badge">{total}</span>
        </li>
        <li>
          <FiUser onClick={openLogin} />
        </li>
      </ul>
    </div>
  );
};

export default CartMenu;
