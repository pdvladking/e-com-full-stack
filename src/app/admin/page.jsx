"use client";
import Link from "next/link";
import DashboardStatus from "@/components/admin/DashboardStats";

export default function AdminDashboard() {
  const products = [
    { _id: "1", name: "Leather Jacket", price: 120, stock: 10},
    { _id: "2", name: "Rawhide Belt", price: 40, stock: 25},
  ];

  const orders = [
    {
      _id: "1",
      customer: { name: "Ram", email: "ram@example.com"},
      cartItems: [
        { name: "Leather Jacket", price: 120, quantity: 1 },
        { name: "Rawhide Belt", price: 40, quantity: 2 },
      ],
      status: "Pending",
    },
    {
      _id: "1",
      customer: { name: "alex", email: "alex@example.com"},
      cartItems: [
        { name: "Leather Jacket", price: 120, quantity: 1 },
        { name: "Rawhide Belt", price: 40, quantity: 2 }],
        status: "Completed",
    },
  ];

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <DashboardStatus products={products} orders={orders} />
      <ul>
        <li><Link href="/admin/products">Manage Products</Link></li>
        <li><Link href="/admin/orders">Orders</Link></li>
      </ul>
    </div>
  );
}