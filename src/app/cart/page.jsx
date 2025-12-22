"use client";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const cartItems = [];

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="max-w-[1200px] mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-neutral-600">
          Your cart is empty. <Link href="/shop" className="text-blue-600 hover:underline">Go shopping</Link>
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-6 border-b pb-4"
            >
              <div className="relative w-24 h-24">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-neutral-700">${item.price} × {item.quantity}</p>
              </div>
              <button className="text-red-600 hover:underline">Remove</button>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-semibold">Total: ${getTotal()}</p>
            <Link
              href="/checkout"
              className="bg-neutral-700 text-white px-6 py-3 rounded hover:bg-neutral-900 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}