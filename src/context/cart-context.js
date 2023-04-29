//provider //consumer

import React, { useState } from "react";
const CartContext = React.createContext();

const CartProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const addCartData = (data) => {
    setCartData([...cartData, data]);
  };
  const removeCartData = (data) => {
    setCartData((data) => data.filter([...cartData]));
  };
  return (
    <CartContext.Provider value={{ cartData, addCartData, removeCartData }}>
      {props.children}
    </CartContext.Provider>
  );
};
export { CartContext, CartProvider };
