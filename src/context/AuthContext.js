"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginService, registerService, logoutService } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const router = useRouter();

  // --- VERIFY TOKEN ON PAGE LOAD ---
  useEffect(() => {
    const checkAuth = async () => {
      const tokenCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="));

      if (tokenCookie) {
        const token = tokenCookie.split("=")[1];

        try {
          const res = await fetch("/api/auth/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
          });

          const data = await res.json();

          if (data.success) {
            setUser({ ...data.data });
          } else {
            setUser(null);
          }
        } catch {
          setUser(null);
        }
      }
    };

    checkAuth();
  }, []);

  // --- LOGIN ---
  const login = async (email, password) => {
    const { success, user, error } = await loginService(email, password);
    if (success) {
      setUser(user);
      setAuthError(null);
      return { success, user };
    }
    setAuthError(error);
    return { success, error };
  };

  // --- REGISTER ---
  const register = async (name, email, password) => {
    const { success, user, error } = await registerService(name, email, password);
    if (success) {
      setUser(user);
      setAuthError(null);
      return { success, user };
    }
    setAuthError(error);
    return { success, error };
  };

  // --- LOGOUT ---
  const logout = async () => {
    await logoutService();
    setUser(null);
    router.push("/login");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, register, logout, authError }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);