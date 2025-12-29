import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Newsletter from "@/models/Newsletter";

export async function POST(req) {
  try {
    await connectDB();

    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 422 }
      );
    }

    const subscriber = await Newsletter.create({ email });
    return NextResponse.json(
      { message: "Subscription successful", subscriber },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API] Newsletter POST error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}