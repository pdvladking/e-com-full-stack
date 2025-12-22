"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function RegisterForm() {
  const { register } = useAuth(); 
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const result = await register(formData.name, formData.email, formData.password);

    if (result.success) {
      setSuccess("Registration successful! Redirecting...");
      setFormData({ name: "", email: "", password: "" });
      router.push("/login");
    } else {
      setError(result.error || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
      <h3 className="text-lg font-semibold">Register</h3>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <label className="flex flex-col">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded"
        />
      </label>

      <button type="submit" className="bg-neutral-700 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}