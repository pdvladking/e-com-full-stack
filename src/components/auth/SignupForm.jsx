'use client';

import { useState } from 'react';
import Input from '../shared/Input';
import Button from '../ui/Button';
import { useAuth } from './AuthProvider';

export default function SignupForm() {
  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      await signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        variant={errors.name ? 'error' : 'default'}
        errorMessage={errors.name}
        fullWidth
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        variant={errors.email ? 'error' : 'default'}
        errorMessage={errors.email}
        fullWidth
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        variant={errors.password ? 'error' : 'default'}
        errorMessage={errors.password}
        fullWidth
      />
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        variant={errors.confirmPassword ? 'error' : 'default'}
        errorMessage={errors.confirmPassword}
        fullWidth
      />
      <Button type="submit" variant="primary" fullWidth>
        Sign Up
      </Button>
    </form>
  );
}
