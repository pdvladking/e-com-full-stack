"use client";
import Image from "next/image";
import ButtonLink from "./ButtonLink";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const looks = [
  {
    id: 1,
    image: "/images/look-4.webp",
    title: "Casual Streetwear",
    description: "From morning walks to gallery dates, this look is built for quiet confidence and everyday luxury.",
    products: [
      { name: "The Soft Wool Coat", href: "/products/soft-wool-coat" },
      { name: "Minimal Leather Crossbody", href: "/products/leather-crossbody" },
      { name: "Low-Profile Suede Boots", href: "/products/suede-boots" },
    ],
  },
  {
    id: 2,
    image: "/images/look-2.webp",
    title: "Elegant Evening",
    description: "Perfect for dinners and events, this look blends elegance with comfort.",
    products: [
      { name: "Silk Evening Dress", href: "/products/silk-evening-dress" },
      { name: "Crystal Clutch", href: "/products/crystal-clutch" },
      { name: "Classic Heels", href: "/products/classic-heels" },
    ],
  },
  {
    id: 3,
    image: "/images/look-3.webp",
    title: "Elegant Evening",
    description: "Perfect for dinners and events, this look blends elegance with comfort.",
    products: [
      { name: "Silk Evening Dress", href: "/products/silk-evening-dress" },
      { name: "Crystal Clutch", href: "/products/crystal-clutch" },
      { name: "Classic Heels", href: "/products/classic-heels" },
    ],
  },
];

export default function ShopTheLook() {
  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Shop the Look
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
        >
          {looks.map((look) => (
            <SwiperSlide key={look.id}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Image */}
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={look.image}
                    alt={look.title}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right: Text + Products */}
                <div>
                  <h3 className="text-2xl font-serif mb-6">
                    {look.title}
                  </h3>
                  <p className="mb-8 text-lg">{look.description}</p>
                  <ul className="space-y-6">
                    {look.products.map((product, i) => (
                      <li key={i} className="flex items-center justify-between">
                        <span>{product.name}</span>
                        <ButtonLink
                          href={product.href}
                          className="text-sm underline hover:opacity-70"
                        >
                          View
                        </ButtonLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}