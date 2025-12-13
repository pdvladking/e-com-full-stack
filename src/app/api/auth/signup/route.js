import { signup } from "@/controllers/authController";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("[Signup] Body received:", body);

    const user = await signup(body);

    return new Response(JSON.stringify(user), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[Signup] Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}