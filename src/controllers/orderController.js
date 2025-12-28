import Order from "@/models/Order";
import Product from "@/models/Product";
import { jwtDecode } from "jwt-decode";

const getUserFromCookie = (cookies) => {
  const token = cookies?.get?.("token")?.value;
  if (!token) return null;
  try {
    const payload = jwtDecode(token);
    return { userId: payload.id, email: payload.email, role: payload.role };
  } catch {
    return null;
  }
};

export async function createOrder(req) {
  const { cookies } = req;
  const user = getUserFromCookie(cookies);
  if (!user) {
    return { status: 401, body: { error: "Unauthorized" } };
  }

  const body = await req.json();
  const { items, shippingAddress, paymentIntentId, totals } = body;

  if (!Array.isArray(items) || items.length === 0) {
    return { status: 400, body: { error: "No items provided" } };
  }

  const productIds = items.map((i) => i._id);
  const products = await Product.find({ _id: { $in: prodtuctsIds } });

  const priceMap = new Map(products.map((p) => [String(p._id), p.price]));
  const normalizedItems = items.map((i) => ({
    product: i._id,
    name: i.name,
    price: priceMap.get(String(i._id)) ?? i.price,
    quantity: Math.max(1, i.quantity || 1),
    image: i.image,
  }));

  const subtotal = normalizedItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
  const shipping = totals?.shipping ?? 0;
  const tax = totals?.tax ?? 0;
  const total = subtotal + shipping + tax;

  const order = await Order.create({
    user: user.userId,
    items: normalizedItems,
    shippingAddress,
    payment: {
      intendId: paymentIntentId || null,
      status: "paid",
      method: totals?.paymentMethod || "mock",
    },
    totals: { subtotal, shipping, tax, total },
    status: "confirmed",
  });

  return { status: 201, body: order };
}

export async function getMyOrders(req) {
  const { cookies } = req;
  const user = getUserFromCookie(cookies);
  if (!user) {
    return { status: 401, body: { error: "Unauthorized" } };
  }

  const orders = await Order.find({ user: user.userId })
  .sort({ createdAt: -1 })
  .lean();
  return { status: 200, body: orders };
}

export async function getAllOrders(req) {
  const { cookies } = req;
  const user = getUserFromCookie(cookies);
  if (!user || user.role !== "admin") {
    return { status: 403, body: { error: "Forbidden" } };
  }

  const orders = await Order.find({})
  .sort({ createdAt: -1 })
  .lean();
  return { status: 200, body: orders };
}

export async function getOrderById(req, { params }) {
  const { id } = params;
  const order = await Order.findById(id).lean();
  if (!order) return { status: 404, body: { error: "Order not found" } };
  return { status: 200, body: order };
}

export async function updateOrderStatus(req, { params }) {
  const { id } = params;
  const { status } = await req.json();

  const updated = await Order.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  ).lean();

  if (!updated) return { status: 404, body: { error: "Order not found" } };
  return { status: 200, body: updated };
}