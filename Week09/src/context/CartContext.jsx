import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (room) => {
    setCartItems((prevItems) => {
      const existingRoom = prevItems.find((r) => r.id === room.id);
      if (existingRoom) {
        alert("Bạn đã chọn đặt phòng này rồi!");
        return prevItems; // Không cộng dồn quantity
      }
      return [...prevItems, { ...room, quantity: room.quantity || 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((r) => r.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((r) => (r.id === id ? { ...r, quantity: Number(quantity) } : r))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = useMemo(() => {
    return cartItems.reduce((total, room) => total + room.quantity, 0);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, room) => total + (room.price * room.quantity), 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
