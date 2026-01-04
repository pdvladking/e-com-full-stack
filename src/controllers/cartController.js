import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function addToCart({ userId, productId, quantity }) {
  await connectDB();

  if (!userId || !productId || !quantity) {
    throw new Error('userId, productId, and quantity are required');
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  if (!user.cart) {
    user.cart = [];
  }

  const existingItem = user.cart.find((item) => item.productId.toString() === productId.toString());

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    user.cart.push({ productId, quantity });
  }

  await user.save();
  return user.cart;
}

export async function removeFromCart({ userId, productId }) {
  await connectDB();

  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  user.cart = user.cart.filter((item) => item.productId.toString() !== productId.toString());

  await user.save();
  return user.cart;
}

export async function getCart({ userId }) {
  await connectDB();

  const user = await User.findById(userId).populate('card.productId');
  if (!user) {
    throw new Error('User not found');
  }

  return user.cart;
}
