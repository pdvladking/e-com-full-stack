"use client";
import { useState } from "react";
import Input from "../ui/Input";

export default function AddProductForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      _id: Date.now().toString(),
      name: formData.name,
      price: parseFloat(formData.price),
      stock:parseInt(formData.stock, 10),
    };

    onAdd(newProduct);
    setFormData({ name: "", price: "", stock: "" });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Product</h3>

      <Input
      label="Name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      />

      <Input
      label="Name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      />

      <Input
      label="Name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      />

      <button type="submit">Add Product</button>  
    </form>
  )
}