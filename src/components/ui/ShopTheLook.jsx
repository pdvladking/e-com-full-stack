"use client";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

const looks = [
  {
    id: 1,
    title: "Casual Streetwear",
    image: "/images/look-1.webp",
    href: "/products/casual-streetwear",
  },
  {
    id: 2,
    title: "Elegant Evening",
    image: "/images/look-2.webp",
    href: "/products/elegant-evening",
  },
  {
    id: 3,
    title: "Weekend Essentials",
    image: "/images/look-3.webp",
    href: "/products/weekend-essentials",
  },
];

export default function ShopTheLook() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-12 text-center">
        Shop The Look
      </h2>

      {/* Grid of looks */}
      <div className="grid gap-12 md:grid-cols-3">
        {looks.map((look) => (
          <div key={look.id} className="flex flex-col items-center">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={look.image}
                alt={look.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2">{look.title}</h3>
            <ButtonLink
              href={look.href}
              className="bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-700 transition"
            >
              View Look
            </ButtonLink>
          </div>
        ))}
      </div>
    </section>
  );
}