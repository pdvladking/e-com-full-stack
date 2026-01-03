import { connectDB } from "@/lib/dbConnect";
import User from "@/models/User";
import Order from "@/models/Order";

export async funcion checkout({ userId, paymentInfo }) {
  await connectDB();

  if (!userId) {
    throw new Error("userId is required");
  }

  const user = await User.findById(userId).populate("cart.productId");
  if (!user) {
    throw new Error("User not found");
  }

  if (!user.cart || user.cart.length === 0) {
    throw new Error("Cart is empty");
  }

  const total = user.cart.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  const order = await Order.create({
    user: user._id,
    items: user.cart.map((item) => ({
      product: item.productId._id,
      quantity: item.quantity,
      price: item.productId.price,
    })),
    total,
    paymentInfo,
    status:"pending",
  });

  user.cart = [];
  await user.save();

  return order;
}

export async function getOrders({ userId }) {
  await connectDB();

  const orders = await Order.find({ user: userId }).populate("items.product")
  return orders;
}