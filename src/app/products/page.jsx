import ProductList from "@/components/products/ProductList";

export default async function ProductsPage() {
  const products = [
    {
      _id: "1",
      name: "The Artisan Satchel",
      image: "/images/featured-1.webp",
      price: 120,
      slug: "artisan-satchel",
      stock: 12,
    },
    {
      _id: "2",
      name: "Heritage Wallet",
      image: "/images/featured-2.webp",
      price: 80,
      slug: "heritage-wallet",
      stock: 34,
    },
    {
      _id: "3",
      name: "Classic Belt",
      image: "/images/featured-3.webp",
      price: 60,
      slug: "classic-belt",
      stock: 20,
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <ProductList products={products} />
    </section>
  );
}