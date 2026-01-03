import { deleteProduct, updateProduct } from '@/controllers/productController';
import { verifyToken } from '@/lib/auth';
import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

// GET
export async function GET(req, { params }) {
  console.log('[API] GET /products/:id hit');
  try {
    await dbConnect();

    const product = await Product.findById(params.id);
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT
export async function PUT(req, { params }) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'No authorization header' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const user = verifyToken(token);

    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    const body = await req.json();
    if (!body.title || !body.price) {
      return NextResponse.json({ error: 'Title and price are required' }, { status: 422 });
    }

    const updated = await updateProduct(params.id, body);
    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    const status = error.message === 'Product not found' ? 404 : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}

// DELETE
export async function DELETE(req, { params }) {
  console.log('[API] DELETE /products/:id hit');
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'No authorization header' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const user = verifyToken(token);

    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    const result = await deleteProduct(params.id);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    const status = error.message === 'Product not found' ? 404 : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}
