// Read logic for getting all blogs, sorting by most recent
import { NextResponse } from 'next/server';
import { connectToDB } from '../../../utils/database';
import Blog from '../../../models/blog';

export async function GET(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 6;
    const skip = (page - 1) * limit;

    const totalBlogs = await Blog.countDocuments();
    const blogs = await Blog.find({})
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);

    const hasMore = (page * limit) < totalBlogs;

    return NextResponse.json({ blogs, hasMore });
  } catch (err) {
    console.error('[GET /api/blogs] Error:', err);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}