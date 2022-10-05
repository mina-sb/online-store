import React, { useContext, useState } from "react";
import "./Cart.scss";
import { VscChromeClose } from "react-icons/vsc";
import { AppContext } from "../../AppContext";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartContext, showCart, backdrop, cartTotalPrice } =
    useContext(AppContext);
  const [cartState, setCartState] = showCart;
  const [backdropState, setbackdropState] = backdrop;
  const [cart, setCart] = cartContext;
  const [totalPrice, setTotalPrice] = cartTotalPrice;
  const navigate = useNavigate();

  const closeCart = () => {
    setCartState(false);
    setbackdropState(false);
  };

  let total = 0;
  cart.map((item) => {
    total += item.price * item.count;
    setTotalPrice(total);
  });

  return (
    <div className={`cart ${cartState ? "open" : "close"}`}>
      <div className="cart-hearder">
        <VscChromeClose className="close-btn" onClick={closeCart} />
        <span className="cart-title">SHOPPING CART</span>
        <span className="cart-counter">{cart.length}</span>
      </div>
      {cart.length == 0 ? (
        <div className="empty-cart">
          <span className="empty-cart-span">Your shopping bag is empty</span>
          <br />
          <a className="empty-cart-btn" onClick={closeCart}>
            Go To The Shop
          </a>
        </div>
      ) : (
        cart.map((item, index) => {
          return (
            <div key={index}>
              <CartItem
                title={item.title}
                price={item.price}
                img={item.img}
                id={item.id}
                count={item.count}
              />
            </div>
          );
        })
      )}
      <div className="cart-bottom-reletive">
        <div className="cart-bottom">
          <div className="cart-total">
            <span>Total:</span>
            <span className="price">${totalPrice}</span>
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
