import dbConnect from '@/lib/dbConnect';
import Contact from '@/models/Contact';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 });
    }

    await dbConnect();
    const newContact = await Contact.create({ name, email, message });

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}