"use client";
import Image from "next/image";
import NextLink from "next/link";

export default function FeaturedDrop() {
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
    <section className="w-full mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-6">Featured Drop</h2>
      <p className="text-center text-neutral-600 mb-12">
        A curated selection of our most loved pieces—crafted to stand out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center gap-6">
            {/* Image clickable with overlay tags */}
            <NextLink
              href={`/product/${product.slug}`}
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

              {/* Overlay tags */}
              <span className="absolute top-3 left-3 bg-sky-600 text-white text-xs font-semibold px-2 py-1 rounded">
                {product.label}
              </span>
              <span className="absolute bottom-3 right-3 bg-black/70 text-white text-sm font-medium px-2 py-1 rounded">
                ${product.price}
              </span>
            </NextLink>

            {/* Product info below */}
            <div className="text-center">
              <h3 className="text-xl font-bold mt-2">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}