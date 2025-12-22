"use client";
import { useState } from "react";
import ProductList from "@/components/products/ProductList";

export default function UserProductsPage() {
  const [products] = useState([
    { _id: "1", name: "Leather Jacket", price: 120, stock: 5 },
    { _id: "2", name: "Rawhide Belt", price: 40, stock: 10 },
    { _id: "3", name: "Boots", price: 150, stock: 3 },
  ]);

  return (
    <div>
      <h2>Products Catalog</h2>
      <ProductList products={products} />
    </div>
  );
}