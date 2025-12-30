import axios from "../lib/axios";

// REGISTER
export const registerService = async (name, email, password) => {
  try {
    const res = await axios.post("/api/auth/register", { name, email, password });
    if (res.data?.success) {
      return { success: true, user: res.data.user };
    }
    return { success: false, error: res.data?.error || "Registration failed" };
  } catch (err) {
    return {
      success: false,
      error: err.response?.data?.error || err.message || "Registration failed",
    };
  }
};

// LOGIN
export const loginService = async (email, password) => {
  try {
    const res = await axios.post("/api/auth/login", { email, password });
    if (res.data?.success) {
      return { success: true, user: res.data.user };
    }
    return { success: false, error: res.data?.error || "Login failed" };
  } catch (err) {
    return {
      success: false,
      error: err.response?.data?.error || err.message || "Login failed",
    };
  }
};

// LOGOUT
export const logoutService = async () => {
  try {
    const res = await axios.post("/api/auth/logout");
    return { success: res.data?.success, message: res.data?.message };
  } catch (err) {
    return {
      success: false,
      error: err.response?.data?.error || err.message || "Logout failed",
    };
  }
};

// VERIFY
export const verifyService = async () => {
  try {
    const res = await axios.get("/api/auth/verify");
    if (res.data?.success) {
      return { success: true, user: res.data.user };
    }
    return { success: false, error: res.data?.error || "Verification failed" };
  } catch (err) {
    return {
      success: false,
      error: err.response?.data?.error || err.message || "Verification failed",
    };
  }
};