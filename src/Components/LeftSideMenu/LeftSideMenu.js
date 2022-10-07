import React, { useContext, useState } from "react";
import "./LeftSideMenu.scss";
import { VscChromeClose } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";

import { BsChevronRight } from "react-icons/bs";
import { AppContext } from "../../AppContext";
import { useNavigate } from "react-router-dom";

const LeftSideMenu = () => {
  const { leftmenuState, backdrop } = useContext(AppContext);
  const [leftmenu, setLeftmenu] = leftmenuState;
  const [backdropState, setbackdropState] = backdrop;

  const closeCart = () => {
    setLeftmenu(false);
    setbackdropState(false);
  };

  return (
    <div
      className={`left-menu ${leftmenu ? "left-menu-open" : "left-menu-close"}`}
    >
      <div className="left-menu-hearder">
        <FaBars className="left-menu-title" />
        <span className="left-menu-title">MENU</span>
      </div>
      <div className="menu">
        <ul>
          <li>
            <div className="menu-item">
              <a>HOME</a>
              <BsChevronRight />
            </div>
          </li>
          <li>
            <div className="menu-item">
              <a>SHOP</a>
              <BsChevronRight />
            </div>
          </li>
          <li>
            <div className="menu-item">
              <a>RETURN</a>
              <BsChevronRight />
            </div>
          </li>
          <li>
            <div className="menu-item">
              <a>ABOUT US</a>
              <BsChevronRight />
            </div>
          </li>
          <li>
            <div className="menu-item">
              <a>CONTACT US</a>
              <BsChevronRight />
            </div>
          </li>
        </ul>
      </div>
      <div className="close-leftMenu" onClick={closeCart}>
        <span>close</span>
      </div>
    </div>
  );
};

export default LeftSideMenu;
