'use client';
import Input from '@/components/shared/Input';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function CheckoutForm() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems, customer: formData }),
      });

      const data = await res.json();
      console.log('Server response:', data);

      clearCart();
      setFormData({ name: '', email: '', address: '' });
      alert('Order placed successfully!');
    } catch (err) {
      console.error('Checkout failed:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
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
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <button type="submit">Place Order</button>
    </form>
  );
}
