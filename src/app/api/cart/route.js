import { NextResponse } from "next/server";
import { addToCart, removeFromCart, getCart } from "@/controllers/cartController";

export async function POST(req) {
  try {
    const body = await req.json();
    const { userId, productId, quantity } = body;

    const cart = await addToCart({ userId, productId, quantity });
    return NextResponse.json({ success: true, cart }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}

export async function DELETE(req) {
  try {
    const body = await req.json();
    const { userId, productId } = body;

    const cart = await removeFromCart({ userId, productId });
    return NextResponse.json({ success: true, cart }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success:false, error: err.message }, { status: 400 });
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    
    const cart = await getCart({ userId });
    return NextResponse.json({ success: true, cart }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}