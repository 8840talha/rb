import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const getInitialCart = () => {
  const saved = localStorage.getItem('cartItems');
  return saved ? JSON.parse(saved) : [];
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialCart);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.title === product.title);
    if (exists) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (title) => {
    setCartItems((prev) => prev.filter((item) => item.title !== title));
  };

  const updateQuantity = (title, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.title === title ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
