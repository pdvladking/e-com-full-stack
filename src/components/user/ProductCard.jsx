"use client";

export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button>Add to Cart</button>
    </div>
  );
}