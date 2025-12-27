"use client";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function CartBadge() {
  const { cartItems } = useCart();
  const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cart" className="relative">
      <FaShoppingCart className="text-xl cursor-pointer hover:text-neutral-900 transition" />
      {count > 0 && (
        <span
        className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
          {count}
        </span>
      )}
    </Link>
  );
}