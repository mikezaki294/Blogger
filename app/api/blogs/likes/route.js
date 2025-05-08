// Patch logic for liking a blog
import { connectToDB } from "@/utils/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    await connectToDB();
    const { blogId, userId } = await req.json();

    if (!blogId || !userId) {
      return NextResponse.json({ error: 'Missing blogId or userId' }, { status: 400 });
    }

    const blog = await Blog.findById(blogId);
    if (!blog) return NextResponse.json({ error: 'Blog not found' }, { status: 404 });

    const alreadyLiked = (blog.likedBy || []).includes(userId);
    if (alreadyLiked) {
      blog.likedBy.pull(userId);
    } else {
      blog.likedBy.push(userId);
    }

    await blog.save();

    return NextResponse.json({ likedBy: blog.likedBy });
  } catch (err) {
    console.error('❌ PATCH /api/blogs/likes failed:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}