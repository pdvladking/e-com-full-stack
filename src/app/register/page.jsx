"use client";
import { useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import Input from "@/components/shared/Input";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
  const { register } = useAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (!name || !email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await register(name, email, password);
    if (res.success) {
      alert("Registered successfully");
    } else {
      alert(res.error || "Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-6 text-center">Create Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" type="text" placeholder="Full Name" required ref={nameRef} />
        <Input name="email" type="email" placeholder="Email Address" required ref={emailRef} />
        <Input name="password" type="password" placeholder="Password" required ref={passwordRef} />
        <Input name="confirmPassword" type="password" placeholder="Confirm Password" required ref={confirmPasswordRef} />
        <Button type="submit" variant="primary" fullWidth>Register</Button>
      </form>
    </div>
  );
}