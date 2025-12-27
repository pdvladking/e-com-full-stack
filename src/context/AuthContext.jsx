"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="));

      if (token) {
        try {
          const payload = jwtDecode(token.split("=")[1]);
          setUser({ role: payload.role, email: payload.email });
        } catch {
          setUser(null);
        }
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      return { success: true, user: data.user }; 
    }
    return { success: false, error: data.error || "Login failed" };
  };

  const register = async (name, email, password) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();

    if (res.ok) {
      setUser(data.user || { email, role: "user" });
      return { success: true, user: data.user || { email, role: "user" } };
    }
    return { success: false, error: data.error || "Registration failed" };
  };

  const logout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);