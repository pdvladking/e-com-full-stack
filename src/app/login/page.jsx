"use client";
import { useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import Input from "@/components/shared/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value;

    const res = await login(email, password);
    if (res.success) {
      alert("Login successful");
    } else {
      alert(res.error || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="email" type="email" placeholder="Email Address" required ref={emailRef} />
        <Input name="password" type="password" placeholder="Password" required ref={passwordRef} />
        <Button type="submit" variant="primary" fullWidth>Login</Button>
      </form>
    </div>
  );
}