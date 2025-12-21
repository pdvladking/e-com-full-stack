"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function CustomerInsightsChart({ orders }) {
  const customerRevenue = {};
  orders.forEach((o) => {
    const total = o.cartItems.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    );
    const name = o.customer?.name || "Unknown";
    customerRevenue[name] = (customerRevenue[name] || 0) + total;
  });

  const labels = Object.keys(customerRevenue);
  const data = Object.values(customerRevenue);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Revenue by Customer ($)",
        data,
        backgroundColor: "#2196f3",
      },
    ],
  };

  const options = {
    indexAxis: "y", 
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  return <Bar data={chartData} options={options} />;
}