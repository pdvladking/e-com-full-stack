export async function POST() {
  try {
    return new Response(
      JSON.stringify({ success: true, message: "Logged out successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": `token=; HttpOnly; Path=/; Max-Age=0 SameSite=Strict`,
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: "Logout failed" }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}