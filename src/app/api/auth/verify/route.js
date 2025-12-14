import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { valid: false, message: "No token provided" },
        { status: 400 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return NextResponse.json({
      valid: true,
      email: decoded.email,
      message: "Token is valid",
    });
  } catch(err) {
    return NextResponse.json(
      { valid: false, message: "Invalid or expired token" },
      { status: 401 }
    );
  }
}