"use client";
import { createContext, useContext, useState, useEffect } from "react";
import {
  loginService,
  logoutService,
  verifyService,
  registerService,
} from "@/services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verify token on mount
  useEffect(() => {
    const verify = async () => {
      const { success, user } = await verifyService();
      if (success) setUser(user);
      setLoading(false);
    };
    verify();
  }, []);

  // REGISTER
  const register = async (name, email, password) => {
    const { success, user, error } = await registerService(
      name,
      email,
      password
    );
    if (success) {
      setUser(user);
      setAuthError(null);
      return { success, user };
    }
    setAuthError(error);
    return { success, error };
  };

  // LOGIN
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

  // LOGOUT
  const logout = async () => {
    const { success } = await logoutService();
    if (success) setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, authError, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);