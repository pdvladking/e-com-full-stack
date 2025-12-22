"use client";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  const handleLogin = (credentials) => {
    console.log("Login attempt:", credentials);
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}