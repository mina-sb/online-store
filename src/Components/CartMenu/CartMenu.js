import React, { useContext } from "react";
import "./CartMenu.scss";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { AppContext } from "../../AppContext";

const CartMenu = () => {
  const { showCart, backdrop } = useContext(AppContext);
  const [cartState, setCartState] = showCart;
  const [backdropState, setbackdropState] = backdrop;

  const openCart = () => {
    setCartState(true);
    setbackdropState(true);
  };

  return (
    <div>
      <ul className="cart-menu">
        <li>
          <FiSearch />
        </li>
        <li>
          <FiShoppingCart onClick={openCart} />
        </li>
        <li>
          <FiUser />
        </li>
      </ul>
    </div>
  );
};

export default CartMenu;
