"use client";
import Image from "next/image";

export default function ProductDetail({ product }) {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={400}
        className="w-full md:w-1/2 h-64 object-cover rounded"
        />

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">${product.price}</p>

          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}