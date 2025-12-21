import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { cartItems, customer } = body;

    const client = await clientPromise;
    const db = client.db("rawhide_store"); 
    const orders = db.collection("orders");

    const result = await orders.insertOne({
      cartItems,
      customer,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Order saved successfully", orderId: result.insertedId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { message: "Error saving order" },
      { status: 500 }
    );
  }
}