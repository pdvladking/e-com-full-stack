"use client";
import ProductCard from "../products/ProductCard";

export default function FeaturedCollection() {
  const products = [
    {
      id: 1,
      label: "NEW",
      name: "The Artisan Satchel",
      image: "/images/featured-1.webp",
      price: 120,
      slug: "artisan-satchel",
    },
    {
      id: 2,
      label: "LIMITED",
      name: "Heritage Wallet",
      image: "/images/featured-2.webp",
      price: 80,
      slug: "heritage-wallet",
    },
    {
      id: 3,
      label: "BESTSELLER",
      name: "Classic Belt",
      image: "/images/featured-3.webp",
      price: 60,
      slug: "classic-belt",
    },
  ];

  return (
    <section className="w-full mx-auto bg-neutral-50 px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-6">Featured Collection</h2>
      <p className="text-center text-neutral-600 mb-12">
        A curated selection of our most loved pieces—crafted to stand out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} label={product.label} />
        ))}
      </div>
    </section>
  );
}