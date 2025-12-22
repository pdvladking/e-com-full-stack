import Image from "next/image";

async function getProduct(id) {

  return {
    _id: id,
    name: "Sample Product",
    description: "This is a placeholder product description.",
    price: 99.99,
    image: "/",
  };
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <main className="max-w-[1200px] mx-auto px-6 py-10">
        <h1 className="text-xl font-bold">Product not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-[1200] mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      {/* Product Image */}
      <div className="relative w-full h-96">
        <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover rounded-md"
        priority={true}
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-neutral-700">{product.description}</p>
        <p className="text-xl font-semibold">{product.price}</p>

        <button className="bg-neutral-700 text-white px-6 py-3 rounded hover:bg-neutral-900 transition">
          Add to Cart
        </button>
      </div>
    </main>
  );
}