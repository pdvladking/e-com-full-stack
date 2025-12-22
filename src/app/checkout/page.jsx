"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // 🔑 Later: integrate with payment gateway + backend order API
    try {
      console.log("Order submitted:", formData);
      setSuccess("Order placed successfully!");
      setFormData({
        name: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
      });
    } catch {
      setError("Checkout failed. Please try again.");
    }
  };

  return (
    <main className="max-w-[800px] mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Shipping Information</h2>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="border px-3 py-2 rounded" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="border px-3 py-2 rounded" />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="border px-3 py-2 rounded" />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required className="border px-3 py-2 rounded" />
        <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} required className="border px-3 py-2 rounded" />
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required className="border px-3 py-2 rounded" />

        <h2 className="text-lg font-semibold mt-6">Payment Information</h2>
        <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required className="border px-3 py-2 rounded" />
        <input type="text" name="expiry" placeholder="MM/YY" value={formData.expiry} onChange={handleChange} required className="border px-3 py-2 rounded" />
        <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required className="border px-3 py-2 rounded" />

        <button type="submit" className="bg-neutral-700 text-white px-6 py-3 rounded hover:bg-neutral-900 transition mt-4">
          Place Order
        </button>
      </form>
    </main>
  );
}