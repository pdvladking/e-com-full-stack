import axios from "../lib/axios";

export const getOrders = async() => {
  try {
    const res = await axios.get("/api/orders");
    return { success: true, orders: res.data };
  } catch {
    return { success: false, error: "Failed to fetch orders" };
  }
};

export const createOrder = async (orderData) => {
  try {
    const res = await axios.post("/api/orders", orderData);
    return { success: true, order: res.data };
  } catch {
    return { success: false, error: "Failed to create order" };
  }
};