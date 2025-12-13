import { login } from "@/controllers/authController";

export async function POST(req) {
  try {
    const body = await req.json();
    const user = await login(body);

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }); 
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json"},
    });
  }
}