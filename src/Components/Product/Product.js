import React, { useContext, useState } from "react";
import "./Product.scss";
import { VscPackage, VscPaintcan } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";

const Product = ({ id, firstImg, secondImg, title, price }) => {
  const { cartContext, backdrop, showCart } = useContext(AppContext);
  const [cart, setCart] = cartContext;
  const [backdropState, setbackdropState] = backdrop;
  const [cartState, setCartState] = showCart;
  const [img, setImg] = useState(false);
  const changeImg = () => {
    setImg(!img);
  };

  const addToCart = () => {
    const productIndex = cart.findIndex((item) => item.id == id);
    if (productIndex < 0) {
      setCart([
        ...cart,
        { id: id, img: firstImg, title: title, price: price, count: 1 },
      ]);
    } else {
      let tempCart = [...cart];
      tempCart[productIndex].count++;
      setCart(tempCart);
    }
    setbackdropState(true);
    setCartState(true);
  };

  return (
    <div className="product">
      <div className="img-box">
        <img src={firstImg} />
      </div>
      <div className="btn-list">
        <div className="item">
          <FiShoppingCart onClick={addToCart} />
        </div>
        <div className="item">
          <VscPackage />
        </div>
        <div className="item">
          <VscPaintcan />
        </div>
      </div>
      <Link to={`/detail/${id}`}>
        <h4 className="product-title">{title.slice(0, 20)}</h4>
      </Link>
      <span className="product-price">{price + "$"}</span>
    </div>
  );
};

export default Product;
