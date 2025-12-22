"use client";
import { useState } from "react";
import Cart from "@/components/user/Cart";

export default function UserCartPage() {
  const [cartItems, setCartItems] = useState([
    { _id: "1", name: "Leather Jacket", price: 120, quantity: 1 },
    { _id: "2", name: "Rawhide Belt", price: 40, quantity: 2 },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <Cart
        items={cartItems}
        onRemove={handleRemove}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}