"use client";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SalesByProductChart({ orders }) {
  const productRevenue = {};
  orders.forEach((o) => {
    o.cartItems.forEach((item) => {
      const revenue = item.price * item.quantity;
      productRevenue[item.name] = (productRevenue[item.name] || 0) + revenue;
    });
  });

  const labels = Object.keys(productRevenue);
  const data = Object.values(productRevenue);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Revenue by Product",
        data,
        backgroundColor: [
          "#4caf50",
          "#2196f3",
          "#ff9800",
          "#9c27b0",
          "#f44336",
        ],
      },
    ],
  };

  return <Pie data={chartData} />;
}