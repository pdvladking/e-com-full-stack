"use client";
import OrderCard from "./OrderCard";

export default function OrderHistory({ orders }) {
  if (orders.length === 0) {
    return <p>Your have no past orders</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {orders.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </div>
  );
}