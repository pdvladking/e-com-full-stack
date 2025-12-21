"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div>
      {/* Link to product detail page using slug or id */}
      <Link href={`/products/${product.slug || product._id}`}>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      </Link>

      {/* Add to Cart button */}
      <button onClick={() => addItem(product)}>
      Add to Cart
      </button>
    </div>
  );
}