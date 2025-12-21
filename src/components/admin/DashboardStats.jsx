"use client";

export default function DashboardStatus({ products = [], orders = [] }) {
  const totalProducts = products.length;
  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.status === "pending").length;

  return (
    <div style={{ display: "flex", gap: "2rem"}}>
      <div>
        <h3>Total Products</h3>
        <p>{totalProducts}</p>
      </div>
      <div>
        <h3>Total Orders</h3>
        <p>{totalOrders}</p>
      </div>
      <div>
        <h3>Pending Orders</h3>
        <p>{pendingOrders}</p>
      </div>
    </div>
  );
}