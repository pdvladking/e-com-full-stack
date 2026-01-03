"use client";
import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";

export default function About() {
  return (
    <section id="about" className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-playfair-display font-bold text-neutral-800 mb-12 text-center md:text-center">
          About Rawhide Leathers
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Studio / Brand Image */}
          <div className="relative w-full h-[350px] md:h-[450px]">
            <Image
              src="/images/equipments.webp"
              alt="Leather craftsmanship at Rawhide Leathers"
              fill
              loading="eager"
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-center md:text-left">
            <p className="text-neutral-600 leading-relaxed mb-6">
              At Rawhide Leathers, we are passionate artisans dedicated to the timeless art of leather craftsmanship. Our journey began with a vision to blend tradition and innovation, creating leather accessories that are both functional and exquisitely beautiful. We specialize in 100% handmade products that reflect a deep respect for authenticity, quality, and sustainability.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Every item we create is more than just an accessory—it’s a statement of enduring elegance and meticulous craftsmanship. Our team of skilled artisans brings decades of experience to every piece, working with precision and care to ensure the highest standards of quality. We source only the finest, ethically produced leather, focusing on sustainable and responsible practices that respect both the environment and the communities we work with.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              From wallets and belts to bags and keychains, every item is thoughtfully designed and crafted to tell its own unique story. Our accessories are not just products—they are heirlooms, designed to accompany you on your journey and age gracefully over time.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              At Rawhide Leathers, we believe in creating more than just leather goods; we create experiences. By choosing our products, you are not only investing in quality but also in a legacy of artistry, sustainability, and timeless style.
            </p>

            {/* CTA Buttons */}
            <div className="flex py-2 gap-4 justify-center md:justify-start">
              <ButtonLink href="/shop" variant="primary" size="md">
                Explore Products
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Our Mission</h3>
            <p className="text-neutral-600 leading-relaxed">
              Our mission at Rawhide Leathers is to create exceptional handmade leather accessories that embody style, functionality, and sustainability. We aim to provide our customers with products that enhance their lives while respecting the environment and the traditions of leather craftsmanship. We are committed to delivering outstanding quality, personalized service, and a unique experience with each product we create.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Our Vision</h3>
            <p className="text-neutral-600 leading-relaxed">
              Our vision is to become a leading name in the leather industry, recognized for our commitment to quality, innovation, and sustainability. We aspire to inspire a movement towards appreciating handcrafted goods that tell a story—promoting the values of artistry and craftsmanship in a world increasingly dominated by mass production. By continuously evolving our designs and practices, we aim to build a loyal community of customers who share our passion for exceptional leather products that stand the test of time.
            </p>
          </div>
        </div>

        <p className="text-center text-neutral-600 mt-12">
          Join us on this exciting journey as we craft a future where quality and artistry reign supreme.
        </p>
      </div>
    </section>
  );
}