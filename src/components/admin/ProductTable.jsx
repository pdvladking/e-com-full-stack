"use client";
import { useState } from "react";
import EditProductForm from "@/components/admin/EditProductForm";

export default function ProductsTable({ products, onUpdate, onDelete }) {
  const [editingProduct, setEditingProduct] = useState(null);

  return (
    <div>
      {editingProduct ? (
        <EditProductForm
          product={editingProduct}
          onUpdate={(updated) => {
            onUpdate(updated);
            setEditingProduct(null);
          }}
          onCancel={() => setEditingProduct(null)}
        />
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="4">No products yet</td>
              </tr>
            ) : (
              products.map((p) => (
                <tr key={p._id}>
                  <td>{p.name}</td>
                  <td>${p.price}</td>
                  <td>{p.stock}</td>
                  <td>
                    <button onClick={() => setEditingProduct(p)}>Edit</button>
                    <button onClick={() => onDelete(p._id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}