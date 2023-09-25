import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cargar elementos del carrito desde el almacenamiento local al inicio
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Agregar un elemento al carrito y guardar en el almacenamiento local
  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Eliminar un elemento del carrito y guardar en el almacenamiento local
  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
