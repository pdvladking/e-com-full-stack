"use client";
import Image from "next/image";

export default function ProductDetail({ product }) {
  if (!product) {
    return (
      <div className="p-6 text-center text-gray-500">
        Products not found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Product Image */}
      {product.image && (
        <div className="relative w-full h-64 mb-6">
          <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-md"
          />
        </div>
      )}

      {/* Product Info */}
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-4">${product.price}</p>
      <p className="text-gray-600 mb-6">{product.description}</p>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add to Cart
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          Back to Products
        </button>
      </div>
    </div>
  )
}