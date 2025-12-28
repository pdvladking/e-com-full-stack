import axios from "../lib/axios";

export const getUserProfile = async () => {
  try {
    const res = await axios.get("/api/user/profile");
    return { success: true, profile: res.data };
  } catch {
    return { success: false, error: "Failed to fetch profile" };
  }
};

export const updateUserProfile = async (profileData) => {
  try {
    const res = await axios.put("/api/user/profile", profileData);
    return { success: true, profile: res.data };
  } catch {
    return { success: false, error: "Failed to update profile" };
  }
};