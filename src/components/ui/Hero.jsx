"use client";
import Image from "next/image";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

export default function Hero() {
  return (
    <section className="relative w-full h-[700px]">
      
      {/* Background Image */}
      <Image
      src="/images/heroSection.webp"
      alt="Hero banner"
      fill
      priority
      className="object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Crafted for Legacy.
          Designed for Now.
        </h1>
        <p className="text-lg text-gray-200 mb-6 max-w-2xl">
          Hand-stitched leather goods that age with grace. Built to last. Styled to lead.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary">Shop Now</Button>
          <ButtonLink href="/products" variant="secondary">
          Browse Products
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}