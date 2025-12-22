"use client";

export default function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem"}}>
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>
        Quantity: {" "}
        <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) => onUpdateQuantity(item._id, parseInt(e.target.value))}
        />
      </p>
      <button onClick={() => onRemove(item._id)}>Remove</button>
    </div>
  );
}