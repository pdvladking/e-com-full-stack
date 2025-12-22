"use client";
import { useState } from "react";
import OrderHistory from "@/components/user/OrderHistory";

export default function UserOrdersPage() {
  const [orders] = useState([
    {
      _id: "1",
      date: "2025-12-20",
      status: "Shipped",
      items: [
        { name: "Leather Jacket", price: 120, quantity: 1 },
        { name: "Rawhide Belt", price: 40, quantity: 2 },
      ],
    },
    {
      _id: "2",
      date: "2025-12-15",
      status: "Completed",
      items: [{ name: "Boots", price: 150, quantity: 1 }],
    },
  ]);

  return (
    <div>
      <h2>Your Orders</h2>
      <OrderHistory orders={orders} />
    </div>
  );
}