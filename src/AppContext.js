import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <AppContext.Provider
      value={{
        showCart: [showCart, setShowCart],
        backdrop: [backdrop, setBackdrop],
        cartContext: [cart, setCart],
        cartTotalPrice: [totalPrice, setTotalPrice],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
