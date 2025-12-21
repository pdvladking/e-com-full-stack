"use client";
import { useState } from "react";
import ProductsTable from "@/components/admin/ProductsTable";
import AddProductForm from "@/components/admin/AddProductForm";

export default function AdminProducts() {
  const [products, setProducts] = useState([
    { _id: "1", name: "Leather Jacket", price: 120, stock: 10 },
    { _id: "2", name: "Rawhide Belt", price: 40, stock: 25 },
  ]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(
      products.map((p) => (p._id === updatedProduct._id ? updatedProduct : p))
    );
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p._id !== id));
  };

  return (
    <div>
      <h2>Products Management</h2>
      <AddProductForm onAdd={handleAddProduct} />
      <ProductsTable
        products={products}
        onUpdate={handleUpdateProduct}
        onDelete={handleDeleteProduct}
      />
    </div>
  );
}