import { login } from "@/controllers/authController";

export async function POST(req) {
  try {
    const body = await req.json();
    const { safeUser, token } = await login(body);

    return new Response(
      JSON.stringify({
        success: true,
        data: { user: safeUser, token },
      }),
      { status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    const statusCode = error.message === "Invalid crendentials" ? 401 : 400;

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: statusCode,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}