// Write only logic for posting a new blog after logging inimport { NextResponse } from 'next/server';
import { connectToDB } from '../../../../utils/database';
import { NextResponse } from 'next/server';
import Blog from '../../../../models/blog';

export async function POST(req) {
  try {
    await connectToDB();

    const body = await req.json();
    const {
      authorUsername,
      authorAvatar,
      title,
      body: content,
      tags,
      coverImageUrl,
    } = body;

    if (!authorUsername || !title || !content || !coverImageUrl || !tags?.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Strip HTML tags and generate a short summary
    const plainText = content.replace(/<[^>]*>/g, '');
    const summary = plainText.slice(0, 200).trim() + '...';

    const newBlog = await Blog.create({
      authorUsername,
      authorAvatar,
      title,
      body: content,
      tags,
      coverImageUrl,
      summary,
      likedBy: [],
    });

    return NextResponse.json(
      { message: 'Blog created successfully', blog: newBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error('[POST /api/blogs/newBlog] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}