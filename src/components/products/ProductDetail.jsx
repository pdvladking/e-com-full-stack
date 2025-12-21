import AddToCartButton from "../cart/AddToCartButton";

const products = [
  { _id: "1", name: "Leather Jacket", slug: "leather-jacket", price: 120, description: "Classic rawhide leather jacket."},
  { _id: "2", name: "Leather Jacket", slug: "leather-jacket", price: 45, description: "Classic rawhide leather jacket."},
  { _id: "3", name: "Leather Jacket", slug: "leather-jacket", price: 150, description: "Classic rawhide leather jacket."},
];

export default function ProductDetail({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <AddToCartButton product={product} />
    </div>
  );
}