'use client';
import { useState } from 'react';
import Input from '../shared/Input';

export default function EditProductForm({ product, onUpdate, onCancel }) {
  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    stock: product.stock,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      name: formData.name,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock, 10),
    };
    onUpdate(updatedProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Product</h3>

      <Input label="Name" name="name" value={formData.name} onChange={handleChange} required />
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
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}
