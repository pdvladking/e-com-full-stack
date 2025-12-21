"use client";
import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside style={{ width: "200px", padding: "1rem", borderRight: "1px solid #ccc" }}>
      <h3>Admin Menu</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link href="/admin">Dashboard</Link></li>
        <li><Link href="/admin/products">Products</Link></li>
        <li><Link href="/admin/orders">Orders</Link></li>
        <li><Link href="/admin/users">Users</Link></li>
      </ul>
    </aside>
  );
}