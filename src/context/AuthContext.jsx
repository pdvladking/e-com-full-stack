"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { loginService, registerService, logoutService } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
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
    const { success, user, error } = await loginService(email, password);
    if (success) {
      setUser(user);
      setAuthError(null);
      return { success, user };
    }
    setAuthError(error);
    return { success, error };
  };

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

  const logout = async () => {
    await logoutService();
    setUser(null);
    router.push("/login");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, authError }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);