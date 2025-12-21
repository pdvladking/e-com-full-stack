"use client";
import ProductsTable from "@/components/admin/ProductTable";

export default function AdminProducts() {
  const mockProducts = [
    { _id: "1", name: "Leather Jacket", price: 120, stock: 10 },
    { _id: "2", name: "Rawhide Belt", price: 40, stock: 25 },
  ];

  return (
    <div>
      <h2>Products Management</h2>
      <ProductsTable products={mockProducts} />
    </div>
  );
}