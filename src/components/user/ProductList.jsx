"use client";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap"}}>
      {products.map((p) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
}