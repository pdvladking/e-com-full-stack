"use client";
import ProductsTable from "@/components/admin/ProductTable";
import AddProductForm from "@/components/admin/AddProductForm";

export default function AdminProducts() {
 const [products, setProducts] = useState([
  { _id: "1", name: "Leather Jacket", price:120, stock: 10 },
  { _id: "2", name: "Rawhide Belt", price:40, stock: 25 },
 ]);

 const handleAddProduct = (newProduct) => {
  setProducts([...products, newProduct]);
 };

 return (
  <div>
    <h2>Products Management</h2>
    <AddProductForm onAdd={handleAddProduct} />
    <ProductsTable products={products} />
  </div>
 );
}