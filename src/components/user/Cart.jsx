"use client";
import CartItem from "../shared/CartItem";

export default function Cart({ items, onRemove, onUpdateQuantity }) {
  if (items.length === 0) {
    return <p>Your cart is empty</p>;
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      {items.map((item) => (
        <CartItem
        key={item._id}
        item={item}
        onRemove={onRemove}
        onUpdateQuantity={onUpdateQuantity}
        />
      ))}
      <h3>Total: ${total}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
}