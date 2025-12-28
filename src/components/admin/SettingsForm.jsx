'use client';
import Input from '@/components/shared/Input';
import { useState } from 'react';

export default function SettingsForm({ initialSettings, onSave }) {
  const [formData, setFormData] = useState(initialSettings);

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
      <h3>Store Settings</h3>

      <Input
        label="Store Name"
        name="storeName"
        value={formData.storeName}
        onChange={handleChange}
        required
      />

      <Input
        label="Currency"
        name="currency"
        value={formData.currency}
        onChange={handleChange}
        required
      />

      <button type="submit">Save Settings</button>
    </form>
  );
}
