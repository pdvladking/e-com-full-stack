"use client";
import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>
        Email:
        <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        />
      </label>
      <br />
      <label>
        Password:
        <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}