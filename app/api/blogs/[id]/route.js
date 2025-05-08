// Read-only logic for specific blogs after clicking on them, does not require login
import { connectToDB } from '@/utils/database';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  try {
    await connectToDB();
    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    console.error('❌ Error fetching blog by ID:', err);
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}