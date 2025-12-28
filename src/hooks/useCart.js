import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
  } = context;

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateQuantity,
    clearCart,
    getCartTotal,
  };
};