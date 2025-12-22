import connectDB from '@/lib/db';
import Product from '@/models/Product';

export async function getProducts() {
  try {
    await connectDB();
    return await Product.find({});
  } catch (error) {
    console.error('[Controller] ❌ getProducts error:', error);
    throw new Error(error.message || 'Failed to fetch products');
  }
}

export async function createProduct(data) {
  try {
    await connectDB();
    if (!data.title || !data.price) {
      throw new Error('Title and price are required');
    }
    return await Product.create(data);
  } catch (error) {
    console.error('[Controller] ❌ createProduct error:', error);
    throw new Error(error.message || 'Failed to create product');
  }
}

export async function updateProduct(id, data) {
  try {
    await connectDB();
    const updated = await Product.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    if (!updated) throw new Error('Product not found');
    return updated;
  } catch (error) {
    console.error('[Controller] ❌ updateProduct error:', error);
    throw new Error(error.message || 'Failed to update product');
  }
}

export async function deleteProduct(id) {
  try {
    await connectDB();
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) throw new Error('Product not found');
    return { message: 'Product deleted successfully', deleted };
  } catch (error) {
    console.error('[Controller] ❌ deleteProduct error:', error);
    throw new Error(error.message || 'Failed to delete product');
  }
}
