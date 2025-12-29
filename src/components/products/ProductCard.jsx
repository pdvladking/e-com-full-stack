"use client";
import Image from "next/image";
import NextLink from "next/link";

export default function ProductCard({ product, label, showStock = false, showAddToCart = false }) {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <NextLink
      href={`/products/${product.slug}`}
      aria-label={`View ${product.name}`}
      className="w-full relative h-80 md:h-96 group"
      >
        <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform"
        />

        {label && (
          <span className="absolute top-3 left-3 bg-sky-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {label}
          </span>
        )}
        <span className="absolute bottom-3 right-3 bg-black/70 text-white text-sm font-medium px-2 py-1 rounded">${product.price}</span>
      </NextLink>

      <div className="text-center">
        <h3 className="text-xl font-bold mt-2">{product.name}</h3>
        {showStock && <p className="text-sm text-neutral-600">Stock: {product.stock}</p>}
        {showAddToCart && (
          <button className="mt-2 px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}