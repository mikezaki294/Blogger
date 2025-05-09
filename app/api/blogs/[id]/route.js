// Read-only logic for specific blogs after clicking on them, does not require login
import { connectToDB } from '@/utils/database';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req,  context ) {
  const params = await context.params
   console.log('params:', params);
  try {
    await connectToDB();

    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    blog._id = blog._id.toString();

    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    console.error('❌ Error fetching blog by ID:', err);
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}