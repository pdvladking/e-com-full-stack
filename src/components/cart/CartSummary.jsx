"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartSummary() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>

      {/* Proceed to Checkout */}
      <Link href="/checkout">
      <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
}