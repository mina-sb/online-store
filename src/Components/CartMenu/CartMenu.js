import React from "react";
import "./CartMenu.scss";
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";

const CartMenu = () => {
  return (
    <div>
      <ul className="cart-menu">
        <li>
          <FaSearch />
        </li>
        <li>
          <FaShoppingCart />
        </li>
        <li>
          <FaUserAlt />
        </li>
      </ul>
    </div>
  );
};

export default CartMenu;
