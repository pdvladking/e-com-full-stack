"use client";
import { useEffect, useState } from "react";
import { getProductById } from "@/services/productService";
import ProductCard from "@/components/products/ProductCard";

export default function ProductPage({ params }) {
  const { slug } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProductsById(slug);
      if (res.success) {
        setProduct(res.product);
      }
    };
    fetchProduct();
  },[slug]);

  if (!product) {
    return (
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <p className="text-gray-600">Loading product...</p>
      </section>
    );
  }

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <ProductCard product={product} showStock={true} showAddToCart={true} /> 
    </section>
  );
}