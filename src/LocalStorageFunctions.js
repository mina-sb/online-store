import React, { useContext } from "react";
import { AppContext } from "./AppContext";

export const SaveToLocal = (cart) => {
  console.log("aaa");
  localStorage.setItem("cart", JSON.stringify(cart));
};
