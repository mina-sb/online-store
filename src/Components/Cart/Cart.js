import React, { useContext, useState } from "react";
import "./Cart.scss";
import { VscChromeClose } from "react-icons/vsc";
import { AppContext } from "../../AppContext";

const Cart = () => {
  const { showCart, backdrop } = useContext(AppContext);
  const [cartState, setCartState] = showCart;
  const [backdropState, setbackdropState] = backdrop;

  const closeCart = () => {
    setCartState(false);
    setbackdropState(false);
  };

  return (
    <div className={`cart ${cartState ? "open" : "close"}`}>
      <div className="cart-hearder">
        <VscChromeClose className="close-btn" onClick={closeCart} />
        <span className="cart-title">SHOPPING CART</span>
        <span className="cart-counter">0</span>
      </div>
      <div className="cart-item">
        <div className="cart-item-img">
          <img src="https://cdn.lorem.space/images/watch/.cache/640x480/taylor-beach-B-epmN7V-IQ-unsplash.jpg" />
        </div>
        <div className="cart-item-info">
          <h3>Bryson Dinnerware Set</h3>
          <p>QTY : 4</p>
          <p>$255.00</p>
        </div>
      </div>
      <div className="cart-item">
        <div className="cart-item-img">
          <img src="https://cdn.lorem.space/images/shoes/.cache/640x480/andres-jasso-PqbL_mxmaUE-unsplash.jpg" />
        </div>
        <div className="cart-item-info">
          <h3>Bryson Dinnerware Set</h3>
          <p>QTY : 4</p>
          <p>$255.00</p>
        </div>
      </div>
      <div className="cart-bottom-reletive">
        <div className="cart-bottom">
          <div className="cart-total">
            <span>Total:</span>
            <span className="price">$255.00</span>
          </div>
          <div className="cart-final-btns">
            <a className="view-cart">View Cart</a>
            <a className="check-out">Check Out</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
