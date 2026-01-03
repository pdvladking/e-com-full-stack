"use client";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return (
      <p className="text-neutral-600">
        No products available yet. Check back soon!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}