"use client";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px]">
      
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
        <h1 className="text-4xl md:text-6xl font-semibold font-playfair text-white leading-tight mb-6">
          Crafted for Legacy. <br />
          Designed for Now.
        </h1>
        <p className="text-lg text-gray-200 mb-6 max-w-2xl">
          Hand-stitched leather goods that age with grace. Built to last. <br /> Styled to lead.
        </p>
        <div className="flex flex-row gap-4">
          <ButtonLink href="/shop" variant="primary">Shop Collection</ButtonLink>
          <ButtonLink href="/about-us" variant="secondary">
          Our Story
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}