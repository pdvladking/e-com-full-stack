import Image from "next/image";

export default function ProductPage({ params }) {
  const { slug } = params;

  // Later: fetch product data by slug from DB or API
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Product: {slug}</h1>
      <p className="text-gray-600">This is where product details will load.</p>
    </section>
  );
}