"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (res.ok) {
          setProducts(data);
        } else {
          setError(data.error || "Failed to load products");
        }
      } catch {
        setError("Something went wrong while fetching products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  },[]);

  if (loading) {
    return (
      <main className="max-w-[1200px] mx-auto px-6 py-10">
        <p className="text-neutral-600">Loading products...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="max-w-[1200px] mx-auto px-6 py-10">
        <p className="text-red-500">{error}</p>
      </main>
    );
  }

  return (
    <main className="max-w-[1200px] mx-auto px-6 py-10">
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
                }). format(product.price)}
              </p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}