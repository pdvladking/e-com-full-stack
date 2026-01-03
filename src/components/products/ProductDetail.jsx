"use client";
import Image from "next/image";
import Button from "../ui/Button";

export default function ProductDetail({ product }) {
  if (!product) {
    return (
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <h1 className="text-xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* Product Image */}
      <div className="relative w-full h-96">
        <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-md"
        priority
        />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bolc">{product.name}</h1>
          <p className="text-neutral-700">{product.description}</p>
          <p className="text-xl font-semibold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>

          <Button
          aria-label={`Add ${product.name} to cart`}
          className="bg-neutral-700 text-white px-6 py-3 rounded hover:bg-neutral-900 transition"
          >
            Add to Cart
          </Button>
      </div>
    </div>
  );
}