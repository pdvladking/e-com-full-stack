import { NextResponse } from "next/server";
import connectDB from "@/lib/db";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ status: "Connected to MongoDB Atlas" });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return NextResponse.json({ error: "Connection failed" }, { status: 500});
  }
}