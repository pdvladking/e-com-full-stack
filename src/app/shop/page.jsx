"use client";
import Link from "next/link";
import Image from "next/image";

export default function ShopPage() {
  const products = [];

  return (
    <main className="max-w-[1200] mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Shop</h1>

      {products.length === 0 ? (
        <p className="text-neutral-600">
          No products available yet. Check back soon!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
               key={product._id}
               href={`/shop/${product._id}`}
               className="border rounded-md p-4 hover:shadow-md transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                  priority={false}
                />
              </div>
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-neutral-700">${product.price}</p>
            </Link>
          ))}
        </div>
      )
    }
    </main>
  );
}