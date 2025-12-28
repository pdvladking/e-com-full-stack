"use client";
import CheckoutForm from "@/components/shared/CheckoutForm";

export default function UserCheckoutPage() {
  const handlePlaceOrder = (orderData) => {
    console.log("Order placed:", orderData);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutForm onPlaceOrder={handlePlaceOrder} />
    </div>
  );
}