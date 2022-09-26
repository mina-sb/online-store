import React, { useState } from "react";
import CartMenu from "../CartMenu/CartMenu";
import { FaBars } from "react-icons/fa";
import "./MainNav.scss";

const MainNav = () => {
  const [flag, setFlag] = useState(false);

  const showMenu = () => {
    setFlag(!flag);
  };

  const main = {};
  return (
    <div className="main-nav">
      <span className="logo">LOGO</span>
      <ul className="nav">
        <li className={flag ? "responsive" : ""}>Home</li>
        <li className={flag ? "responsive" : ""}>Shop</li>
        <li className={flag ? "responsive" : ""}>Return</li>
        <li className={flag ? "responsive" : ""}>About Us</li>
        <li className={flag ? "responsive" : ""}>Contact Us</li>
        <li className="menu-bars">
          <FaBars onClick={showMenu} />
        </li>
      </ul>
      <CartMenu className="cart-menu" onClick={showMenu} />
    </div>
  );
};

export default MainNav;
