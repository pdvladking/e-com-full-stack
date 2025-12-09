import Product from "../models/Product.js";
import dbConnect from "../lib/db.js";

export async function getProducts() {
  await dbConnect();
  return await Product.find({});
}

export async function getProductsById(id) {
  await dbConnect();
  return await Product.findById(id);
}

export async function createProduct(data) {
  await dbConnect();
  const product = new Product(data);
  return await product.save();
}

console.log("Fetching products...")