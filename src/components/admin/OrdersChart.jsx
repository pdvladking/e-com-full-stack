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

export default function OrdersChart({ orders }) {
  const completed = orders.filter((o) => o.status === "completed").length;
  const pending = orders.filter((o) => o.status === "Pending").length;

  const chartData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        label: "Orders",
        data: [completed, pending],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  return <Bar data={chartData} />;
}