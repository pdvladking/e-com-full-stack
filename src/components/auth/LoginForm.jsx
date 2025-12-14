"use client";

import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useAuth } from "./AuthProvider";

export default function LoginForm() {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if(!formData.email.trim()) {
    newErrors.email = "Email is required";
  }

  if (!formData.password) {
    newErrors.password = "Password is required";
  }

  setErrors(newErrors);

  if(Object.keys(newErrors).length === 0) {
    login(formData);
  }
};

return (
  <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
    <Input
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
    variant={errors.email ? "error" : "default"}
    errorMessage={errors.email}
    fullWidth
    />

    <Input
    type="password"
    name="password"
    placeholder="Password"
    value={formData.password}
    onChange={handleChange}
    variant={errors.password ? "error" : "default"}
    errorMessage={errors.password}
    fullWidth
    />

    <Button type="submit" variant="primary" fullWidth>
      Log In
    </Button>
  </form>
);
}