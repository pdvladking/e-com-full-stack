import ProductCard from "@/components/products/ProductCard";

const products = [
  { _id: "1", name: "Leather Jacket", slug: "leather-jacket", price: 120 },
  { _id: "2", name: "Rawhide Wallet", slug: "rawhide-wallet", price: 45 },
  { _id: "3", name: "Cowboy Boots", slug: "cowboy-boots", price: 150 },
];

export default function ProductList() {
  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}