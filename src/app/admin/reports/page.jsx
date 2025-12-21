"use client";
import ReportsOverview from "@/components/admin/ReportsOverview";
import RevenueChart from "@/components/admin/RevenueChart";
import OrdersChart from "@/components/admin/OrdersChart";
import CartItem from "@/components/cart/CartItem";

export default function AdminReports() {
  const mockOrders = [
    {
      _id: "1",
      CartItems: [
        { name: "Leather Jacket", price: 120, quantity: 1 },
        { name: "Rawhide Belt", price: 40, quantity: 2 },
      ],
      status: "Completed",
    },
    {
      _id: "2",
      cartItems: [{ name: "Leather Jacket", price: 120, qunatity: 1 }],
      status: "Pending",
    },
  ];

  const mockRevenue = [
    { month: "Jan", revenue: 500 },
    { month: "Feb", revenue: 800 },
    { month: "Mar", revenue: 1200 },
  ];

  return (
    <div>
      <h2>Reports</h2>
      <ReportsOverview orders={mockOrders} />
      <h3>Revenue Over Time</h3>
      <RevenueChart data={mockRevenue} />
      <h3>Orders by Status</h3>
      <OrdersChart orders={mockOrders} />
    </div>
  );
}