import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect(); 
  await Product.deleteMany({});
  await Product.insertMany([
    { name: 'leather bag', price: 1200, description: 'High-end bag', image: '/bag.webp' },
    { name: 'leather purse', price: 1200, description: 'High-end purse', image: '/purse.webp' },
    { name: 'leather belt', price: 1200, description: 'High-end belt', image: '/belt.webp' },
  ]);
  return NextResponse.json({ message: 'Products seeded' });
}