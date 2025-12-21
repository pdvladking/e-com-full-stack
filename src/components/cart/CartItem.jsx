"use client";
import { useCart } from "@/context/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>

      {/* Quantity controls */}
      <button onClick={() => updateQuantity(item._id, item.quantity - 1 )} disabled={item.quantity <= 1}>
      -
      </button>
      <button onClick={() => updateQuantity(item._id, item.quantity + 1 )}>
      +
      </button>

      {/* Remove item */}
      <button onClick={() => removeItem(item._id)}>Remove</button>
    </div>
  );
}