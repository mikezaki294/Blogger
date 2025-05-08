// 2nd page for when a user clicks to see an individual blog
import BlogAuthor from '@/components/blogs/blogComponents/blogAuthor';
import BlogDate from '@/components/blogs/blogComponents/blogDate';
import BlogImage from '@/components/blogs/blogComponents/blogImage';
import BlogLikes from '@/components/blogs/blogComponents/blogLikes';
import BlogTags from '@/components/blogs/blogComponents/blogTags';
import BlogTitle from '@/components/blogs/blogComponents/blogTitle';
import BlogBody from '@/components/blogs/blogComponents/blogBody';
import BlogContentWrapper from '@/components/blogs/blogComponents/blogContentWrapper';
import { connectToDB } from '@/utils/database';
import Blog from '@/models/blog';
import { Box, Container, Divider } from '@mui/material';
import { fullImageWrapper } from '../../../styles/imageStyles';
import { fullHeaderWrapper, fullMetaRow } from '../../../styles/fullBlogStyles';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  await connectToDB();
  const blogs = await Blog.find({}, '_id');
  return blogs.map((blog) => ({ id: blog._id.toString() }));
}

export default async function BlogDetailPage(props) {
  const { id } = await props.params;
  await connectToDB();
  const blog = await Blog.findById(id).lean();
  blog._id = blog._id.toString();
  // blog.likedBy = blog.likedBy.map(id => id.toString()); <- Likes logic, taking down for now

  // Error catch for no blog
  if (!blog) {
    return (
      <Container sx={{ py: 10 }}>
        <h1>Blog Not Found</h1>
      </Container>
    );
  }

  return (
    <Container > {/* Resize entire blog page here */}




<BlogContentWrapper>
        <Box sx={fullHeaderWrapper}>
          <BlogTitle title={blog.title} variant="full" />
          <Box sx={fullMetaRow}>
            <BlogAuthor avatar={blog.authorAvatar} username={blog.authorUsername} variant="full" />
            <BlogDate date={blog.createdAt} />
          </Box>
          <Box sx={fullImageWrapper}>
          <BlogImage imageUrl={blog.coverImageUrl} full />
        </Box>
        </Box>

        <Divider variant="full" />

        <BlogBody body={blog.body} />

        <BlogTags tags={blog.tags} variant="full" />
      </BlogContentWrapper>

    </Container>
  );
}