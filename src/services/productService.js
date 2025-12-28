import axios from "../lib/axios";

export const getProducts = async () => {
  try {
    const res = await axios.get("/api/products");
    return { success: true, products: res.data };
  } catch (err) {
    return { success: false, error: "Failed to fetch products" };
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`/api/products/${id}`);
    return { success: true, product: res.data };
  } catch {
    return { success: false, error: "Product not found" };
  }
};

export const createProduct = async (productData) => {
  try {
    const res = await axios.post("/api/products", productData);
    return { success: true, product: res.data };
  } catch {
    return { success: false, error: "Failed to create product" };
  }
};