import { signup } from "@/controllers/authController";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("[Signup] Body received:", body);

    const { safeUser, token } = await signup(body);

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
    console.error("[Signup] Error:", error.message);

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