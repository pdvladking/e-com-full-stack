import { NextResponse } from "next/server";

const adminRoutes = ["/admin"];
const userRoutes = ["/user"];

export function middleware(req) {
  const token = req.cookies.get("token");
  const url = req.nextUrl.pathname;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const payload = JSON.parse(atob(token.split(".")[1]));
  const role = payload.role;

  if (adminRoutes.some((route) => url.startsWith(route)) && role  !== "admin") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (userRoutes.some((route) => url.startsWith(route)) && role !== "user") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};