import axios from "axios";

const instance = axios.create({
  baseURL: typeof window === "undefined" ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000" : "",
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;