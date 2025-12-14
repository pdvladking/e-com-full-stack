"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
  });

  // ✅ Keep localStorage in sync
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // ✅ Verify token if present
  useEffect(() => {
    const verifyToken = async () => {
      if (user?.token) {
        try {
          const res = await fetch("/api/auth/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: user.token }),
          });
          if (!res.ok) throw new Error("Invalid token");

          const data = await res.json();
          if (!data.valid) setUser(null);
        } catch {
          setUser(null);
        }
      }
    };
    verifyToken();
  }, [user?.token]);

  // ✅ Login
  const login = async (formData) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Login failed");

      const data = await res.json();
      // ⚠️ Backend must return token for this to work
      setUser({ email: data.email, token: data.token });
      console.log("User logged in:", data);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Signup
  const signup = async (formData) => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Signup failed");

      const data = await res.json();
      // ⚠️ Backend must return token for this to work
      setUser({ email: data.email, token: data.token });
      console.log("User signed up:", data);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Logout
  const logout = () => {
    setUser(null);
    console.log("User logged out");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}