import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ success: false, error: "No token provided" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return NextResponse.next();
  } catch (err) {
    return NextResponse.json({ success: false, error: "Invalid token" }, { status: 403 });
  }
}


export const config = {
  matcher: ["/api/orders/:path*", "/api/products/:path*"], 
};