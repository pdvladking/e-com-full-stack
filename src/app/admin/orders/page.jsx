"use client";
import { useState } from "react";
import OrdersTable from "@/components/admin/OrdersTable";

export default function AdminOrders() {
  const [orders, setOrders] = useState([
    {
      _id: "1",
      customer: { name: "Raja", email: "raja@example.com" },
      cartItems: [
        { name: "Leather Jacket", price: 120, quantity: 1 },
        { name: "Rawhide Belt", price: 40, quantity: 2 },
      ],
      status: "Pending",
    },
  ]);

  const handleUpdateOrder = (updatedOrder) => {
    setOrders(
      orders.map((o) => (o._id === updatedOrder._id ? updatedOrder : o))
    );
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((o) => o._id !== id));
  };

  return (
    <div>
      <h2>Orders Management</h2>
      <OrdersTable
        orders={orders}
        onUpdate={handleUpdateOrder}
        onDelete={handleDeleteOrder}
      />
    </div>
  );
}