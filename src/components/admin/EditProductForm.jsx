"use client";
import { useState } from "react";
import Input from "../ui/Input";

export default function EditProductForm({ product, onUpdate, onCancel }) {
  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    stock: product.stock,
  });

  const handleChange = (e) => {
    e.preventDefault();

    const updateProduct = {
      ...product,
      name: formData.name,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock, 10),
    };

    onUpdate(updateProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Product</h3>

      <Input
      label="Name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      />

      <Input
      label="Price"
      type="number"
      name="price"
      value={formData.price}
      onChange={handleChange}
      required
      />

      <Input
      label="Stock"
      type="number"
      name="stock"
      value={formData.stock}
      onChange={handleChange}
      required
      />

      <button type="submit">Save</button>
      <button type="submit" onClick={onCancel}>Cancel</button>
    </form>
  )
}