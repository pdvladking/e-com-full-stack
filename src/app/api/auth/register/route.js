import { register } from "@/controllers/authController";

export async function POST(req) {
  try {
    const body = await req.json();
    const { safeUser, token } = await register(body);

    return new Response(
      JSON.stringify({
        success: true,
        data: { user: safeUser, token },
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}