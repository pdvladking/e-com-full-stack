'use client';
import { useState } from 'react';
import Input from '../shared/Input';

export default function ProfileForm({ initialProfile, onSave }) {
  const [formData, setFormData] = useState(initialProfile);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Admin Profile</h3>

      <Input label="Name" name="name" value={formData.name} onChange={handleChange} required />

      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <button type="submit">Save Profile</button>
    </form>
  );
}
