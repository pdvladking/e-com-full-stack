"use client";
import Image from "next/image";

export default function ProductCard ({ product }) {
  return (
    <div className="border rounded p-4 shadow-sm hover:shadow-md transition">
      <Image
      src={product.image}
      alt={product.name}
      width={300}
      height={200}
      className="w-full h-40 object-cover mb-2 rounded"
      />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">
        Add to Cart
      </button>
    </div>
  );
}