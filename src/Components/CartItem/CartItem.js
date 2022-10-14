import React, { useContext } from "react";
import "./CartItem.scss";
import { VscChevronUp, VscChevronDown } from "react-icons/vsc";
import { AppContext } from "../../AppContext";

const CartItem = (props) => {
  const { cartContext, cartTotalPrice } = useContext(AppContext);
  const [cart, setCart] = cartContext;
  const [totalPrice, setTotalPrice] = cartTotalPrice;

  const addItem = () => {
    const productIndex = cart.findIndex((item) => item.id == props.id);
    if (productIndex < 0) {
    } else {
      let tempCart = [...cart];
      tempCart[productIndex].count++;
      setCart(tempCart);
    }
  };
  const removeItem = () => {
    const productIndex = cart.findIndex((item) => item.id == props.id);
    if (productIndex < 0) {
    } else {
      let tempCart = [...cart];
      tempCart[productIndex].count--;
      if (tempCart[productIndex].count > 0) {
        setCart(tempCart);
      } else {
        tempCart.splice(productIndex, 1);
        setCart(tempCart);
        setTotalPrice(0);
      }
    }
  };

  return (
    <div>
      {!props.flag ? (
        <div className="cart-item">
          <div className="cart-item-img">
            <img src={props.img} />
          </div>
          <div className="cart-item-info">
            <h3>{props.title}</h3>
            <p>{props.price}$</p>
            <div className="addRemove">
              <span className="addRemove-btn">
                <VscChevronDown onClick={removeItem} />
              </span>
              <span className="count">{props.count}</span>
              <span className="addRemove-btn">
                <VscChevronUp onClick={addItem} />
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-detail-item">
          <div className="img-title">
            <div className="cart-detail-item-img">
              <img src={props.img} />
            </div>
            <div className="cart-detail-item-info">
              <h3>{props.title}</h3>
              <p>size : 38</p>
            </div>
          </div>
          <p className="cart-detail-price">{props.price}$</p>
          <div className="addRemove-detail">
            <span className="addRemove-btn">
              <VscChevronDown onClick={removeItem} />
            </span>
            <span className="count">{props.count}</span>
            <span className="addRemove-btn">
              <VscChevronUp onClick={addItem} />
            </span>
          </div>
          <p className="cart-detail-price">{props.count * props.price}$</p>
        </div>
      )}
    </div>
  );
};

export default CartItem;
