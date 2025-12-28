"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function OrderConfirmationPage() {
  const { cartItems, clearCart } = useCart();

  const order =
  cartItems.length > 0
  ? {
    id: Date.now().toString(),
    items: cartItems,
    total: cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ),
  }
  : null;

  if (order) {
    clearCart();
  }

  if (!order) {
    return (
      <main className="max-w-[800px] mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">No Order Found</h1>
        <Link href="/shop" className="text-blue-600 hover:underline">
        Back to Shop
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-[800px] mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Thank You for Your Order!</h1>
      <p className="text-neutral-700 mb-4">
        Your order <span className="font-semibold">#{order.id}</span> has been 
        placed successfully.
      </p>

      <div className="border rounded p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
        {order.items.map((item) => (
          <p key={item._id}>
            {item.name} x {item.quantity} - ${item.price * item.quantity}
          </p>
        ))}
        <p className="font-bold mt-2">Total: ${order.total}</p>
      </div>

      <div className="flex gap-4">
        <Link
        href="/shop"
        className="bg-neutral-700 text-white px-6 py-3 rounded hover:bg-neutral-900 transition"
        >
          Continue Shopping
        </Link>
        <Link
        href="/user/orders"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
        >View Your Orders
        </Link>
      </div>
    </main>
  );
}