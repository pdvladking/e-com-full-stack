"use client";
import OrdersTable from "@/components/admin/OrdersTable";

export default function AdminOrders() {
  const mockOrders = [
    {
      _id: "1",
      customer: { name: "Raja", email: "you@example.com"},
      cartItems: [
        { name: "Leather Jacket", price: 120, quantity: 1 },
        { name: "Rawhide Belt", price: 40, quantity: 2 },
      ],
      status: "Pending",
    },
  ];

  return (
    <div>
      <h2>Order Management</h2>
      <OrdersTable orders={mockOrders} />
    </div>
  );
}