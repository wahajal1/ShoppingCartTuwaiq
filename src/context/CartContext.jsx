import { createContext, useState } from "react";

const Context = createContext([]);

function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  //remove from cart

  return (
    <Context.Provider value={{ cart, addToCart }}>{children}</Context.Provider>
  );
}

export { CartContext, Context };
