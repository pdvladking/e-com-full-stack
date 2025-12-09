import { getProducts, createProduct } from "../../controllers/productController.js";

export async function GET() {
  console.log("API GET /products hit");
  const products = await getProducts();
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
  console.log("API POST /products hit");
  const body = await req.json();
  const product = await createProduct(body);
  return new Response(JSON.stringify(product), { status: 201 });
}