import React, { useState } from "react";
import CartMenu from "../CartMenu/CartMenu";
import { FaBars } from "react-icons/fa";
import "./MainNav.scss";
import { Link } from "react-router-dom";

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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/detail">Books</Link>
        </li>

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
