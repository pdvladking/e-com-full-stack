"use client";
import { useMemo } from "react";

export default function ReportsOverview({ orders = [] }) {
  const totalRevenue = useMemo(
    () =>
      orders.reduce(
        (sum, o) =>
          sum +
        o.cartItems.reduce((s, i) => s + i.price * i.quantity, 0),
        0
      ),
      [orders]
  );

  const totalOrders = orders.length;
  const completedOrders = orders.filter((o) => o.status === "Completed").length;
  const pendingOrders = orders.filter((o) => o.status === "Pending").length;

  return (
    <div style={{ display: "flex", gap: "2rem"}}>
      <div>
        <h3>Total Revenue</h3>
        <p>${totalRevenue}</p>
      </div>
      <div>
        <h3>Total Orders</h3>
        <p>{totalOrders}</p>
      </div>
      <div>
        <h3>Completed Orders</h3>
        <p>{completedOrders}</p>
      </div>
      <div>
        <h3>Pending Orders</h3>
        <p>{pendingOrders}</p>
      </div>
    </div>
  );
}