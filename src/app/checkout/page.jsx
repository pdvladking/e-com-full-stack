"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "", email: "", address: "", city: "",
    postalCode: "", country: "", cardNumber: "",
    expiry: "", cvv: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");

    try {
      const order = { ...formData, items: cartItems };
      console.log("Order submitted:", order);

      setSuccess("Order placed successfully!");
      clearCart(); 

      setFormData({
        name: "", email: "", address: "", city: "",
        postalCode: "", country: "", cardNumber: "",
        expiry: "", cvv: "",
      });

      router.push("/orderconfirmation");
    } catch {
      setError("Checkout failed. Please try again.");
    }
  };

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="max-w-[800px] mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Order Summary */}
      {cartItems.length > 0 && (
        <div className="mb-6 border p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
          {cartItems.map((item) => (
            <p key={item._id}>
              {item.name} × {item.quantity} — ${item.price * item.quantity}
            </p>
          ))}
          <p className="font-bold mt-2">Total: ${getTotal()}</p>
        </div>
      )}

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Shipping Information</h2>
        {/* inputs same as before */}
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="border px-3 py-2 rounded" />
        {/* ... other inputs ... */}

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