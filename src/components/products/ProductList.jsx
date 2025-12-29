"use client";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p className="text-center text-neutral-600">No products available</p>
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {products.map((p) => (
        <ProductCard
        key={p._id}
        product={p}
        showStock={true}
        showAddToCart={true}
        />
      ))}
    </div>
  );
}