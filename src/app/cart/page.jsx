"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, removeItem, updateQuantity, clearCart } = useCart();

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="max-w-[1200px] mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-neutral-600">
          Your cart is empty.{" "}
          <Link href="/shop" className="text-blue-600 hover:underline">
            Go shopping
          </Link>
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-6 border-b pb-4"
            >
              {/* Product image */}
              <div className="relative w-24 h-24">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>

              {/* Product details */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-neutral-700">${item.price}</p>

                {/* Quantity controls */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() =>
                      updateQuantity(item._id, Math.max(1, item.quantity - 1))
                    }
                    disabled={item.quantity <= 1}
                    className="px-2 py-1 bg-neutral-200 rounded hover:bg-neutral-300 transition disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="px-2 py-1 bg-neutral-200 rounded hover:bg-neutral-300 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => removeItem(item._id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-semibold">Total: ${getTotal()}</p>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-800 transition"
              >
                Clear Cart
              </button>
              <Link
                href="/checkout"
                className="bg-neutral-700 text-white px-6 py-3 rounded hover:bg-neutral-900 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}