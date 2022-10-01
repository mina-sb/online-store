import React, { useContext, useState } from "react";
import CartMenu from "../CartMenu/CartMenu";
import { FaBars } from "react-icons/fa";
import "./MainNav.scss";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../AppContext";

const MainNav = () => {
  const [flag, setFlag] = useState(false);

  const { navColor } = useContext(AppContext);
  const [navBg, setNavBg] = navColor;

  const showMenu = () => {
    setFlag(!flag);
  };

  const changeNavColorHome = () => {
    setNavBg(true);
  };
  const changeNavColorDetail = () => {
    setNavBg(false);
  };

  const main = {};
  return (
    <div className={`main-nav ${navBg ? "bg-g" : "bg-w"}`}>
      <span className="logo">LOGO</span>
      <ul className="nav">
        <li>
          <Link to="/" onClick={changeNavColorHome}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/detail" onClick={changeNavColorDetail}>
            Books
          </Link>
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
