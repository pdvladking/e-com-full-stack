"use client";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <Link
    href={`/shop/${product._id}`}
    aria-label={`View details for ${product.title}`}
    className="border rounded-md pb-4 hover:shadow-lg hover:scale-[1.02] transition-transform duration-200"
    >
      <div className="relative w-full h-48">
        <Image
        src={product.images?.[0]}
        alt={product.title}
        fill
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw, 33vw"
               className="object-cover rounded"
               />
      </div>
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-neutral-700">
        {new Intl.NumberFormat("en-us", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
      </p>
    </Link>
  );
}