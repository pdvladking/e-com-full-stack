"use client";
import { useState } from "react";

export default function UserProfile({ user, onUpdate }) {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px"}}>
      <h3>Profile Information</h3>

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
        value={formData.address}
        onChange={handleChange}
        required
        />
      </label>
      <br />

      <label>
        Address:
        <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Update Profile</button>
    </form>
  );
}