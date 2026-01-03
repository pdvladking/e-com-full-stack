import ProductCard from "@/components/products/ProductCard";
import { getProductBySlug } from "@/controllers/productController";
import { getProductById } from "@/services/productService";

export default async function ProductPage({ params }) {
  const { slug } = params;
  const res = await getProductBySlug(slug);

  if (!res.success) {
    return (
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <p className="text-gray-600">Product not found.</p>
      </section>
    );
  }

  const product = res.product;

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <ProductCard product={product} showStock={true} showAddToCart={true} />
    </section>
  );
}