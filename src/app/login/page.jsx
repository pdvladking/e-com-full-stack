"use client";
import { useState } from "react";
import Input from "@/components/ui/Input";
import ButtonLink from "@/components/ui/ButtonLink";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-neutral-800 mb-2">Welcome back</h1>
        <p className="text-sm text-neutral-500 mb-6">Login to continue</p>

        <form className="flex flex-col gap-4">
          <Input
          id="email" 
          label="Email"
          type="email" 
          value={form.email} 
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Enter your email" />

          <Input
          label="Password" 
          type="password" 
          value={form.password} 
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Enter your password" 
          />

          <p className="mt-4 text-sm text-neutral-600">
            Don’t have an account?{" "}
            <ButtonLink href="/signup" variant="secondary" size="sm">Sign Up</ButtonLink>
          </p>
        </form>
      </div>
    </div>
  )
}