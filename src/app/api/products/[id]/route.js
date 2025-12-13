import { NextResponse } from "next/server";
import { updateProduct, deleteProduct } from "@/controllers/productController";
import { verifyToken } from "@/lib/auth";

export async function PUT(req, { params }) {
  console.log("[API] PUT /products/:id hit");
  try {
    const user = verifyToken(req);
    if (user.role !== "admin") {
      return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    const body = await req.json();
    if (!body.title || !body.price) {
      return NextResponse.json({ error: "Title and price are required" }, { status: 422 });
    }

    const updated = await updateProduct(params.id, body);
    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    const status = error.message === "Product not found" ? 404 : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}

export async function DELETE(req, { params }) {
  console.log("[API] DELETE /products/:id hit");
  try {
    const user = verifyToken(req);
    if (user.role !== "admin") {
      return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    const result = await deleteProduct(params.id);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    const status = error.message === "Product not found" ? 404 : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}