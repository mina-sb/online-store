import React from "react";
import "./CartMenu.scss";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

const CartMenu = () => {
  return (
    <div>
      <ul className="cart-menu">
        <li>
          <FiSearch />
        </li>
        <li>
          <FiShoppingCart />
        </li>
        <li>
          <FiUser />
        </li>
      </ul>
    </div>
  );
};

export default CartMenu;
