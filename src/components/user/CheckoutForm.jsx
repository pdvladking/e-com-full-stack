"use client";
import { useState } from "react";

export default function CheckoutForm({ onPlaceOrder }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "COD",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlaceOrder(formData);
    setFormData({ name: "", email: "", address: "", paymentMethod: "COD" });
  };

  return (
    <form onSubmit={handleSubmit}>
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
        Address:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Payment Method:
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="COD">Cash on Delivery</option>
          <option value="Card">Credit/Debit Card</option>
          <option value="Wallet">Digital Wallet</option>
        </select>
      </label>
      <br />

      <button type="submit">Place Order</button>
    </form>
  );
}