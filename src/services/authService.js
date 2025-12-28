import axios from "../lib/axios";

export const loginService = async (Email, password) => {
  try {
    const res = await axios.post("/api/login", { email, password });
    return { success: true, user: res.data.user };
  } catch (err) {
    return { success: false, error: err.response?.data?.error || "Login failed" };
  }
};

export const registerService = async (name, email, password) => {
  try {
    const res = await axios.post("/api/register", { name, email, password });
    return { success: true, user: res.data.user || { email, role: "user"} };
  } catch (err) {
    return { success: false, error: err.response?.data?.error || "Registration failed" };
  }
};

export const logoutService = async () => {
  try {
    await axios.post("/api/logout");
    return { success: true };
  } catch {
    return { success: false, error: "Logout failed" };
  }
};