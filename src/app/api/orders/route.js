import { verifyToken } from "@/lib/auth";
import Order from "@/models/Order";

export async function GET(req) {
  try {
    const decoded = verifyToken(req);

    const orders = await Order.find({ user: decoded.id }).lean();

    return new Response(JSON.stringify(orders), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}