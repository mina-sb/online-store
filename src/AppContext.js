import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showCart: [showCart, setShowCart],
        backdrop: [backdrop, setBackdrop],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
