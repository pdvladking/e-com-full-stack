"use client";
import { useState } from "react";

export default function RegistrationForm({ onRegister }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register</h3>
      <label>
        Name:
        <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        />
      </label>
      <br />

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

        <button type="submit">Register</button>
    </form>
  );
}