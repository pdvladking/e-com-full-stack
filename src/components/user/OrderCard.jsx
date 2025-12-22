"use client";

export default function OrderCard({ order }) {
  const total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <h3>Order #{order._id}</h3>
      <p>Date: {order.date}</p>
      <p>Status: {order.status}</p>
      <ul>
        {order.items.map((item, idx) => (
          <li key={idx}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <strong>Total: ${total}</strong>
    </div>
  );
}