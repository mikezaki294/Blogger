'use client';
// Holds individual cards to be mapped

import Link from 'next/link';
import { Card, Box, useTheme } from '@mui/material';
import BlogImage from './blogComponents/blogImage';
import BlogAuthor from './blogComponents/blogAuthor';
import BlogDate from './blogComponents/blogDate';
import BlogLikes from './blogComponents/blogLikes';
import BlogTitle from './blogComponents/blogTitle';
import BlogSummary from './blogComponents/blogSummary';
import BlogTags from './blogComponents/blogTags';
import { cardContainer, cardHeader, cardHover } from '@/styles/blogCardStyles';

export default function BlogCard({ blog }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        ...cardContainer(theme),
        '&:hover': cardHover(theme),
      }}
    >
      <Link
        href={{
          pathname: `/blog/${blog._id}`,
          query: {
            title: blog.title,
            coverImageUrl: blog.coverImageUrl,
            authorUsername: blog.authorUsername,
            authorAvatar: blog.authorAvatar,
            createdAt: blog.createdAt, },
        }}
        prefetch={false}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Box sx={{ position: 'relative' }}>
          <BlogImage imageUrl={blog.coverImageUrl} card />
          {/* <BlogLikes blogId={blog._id} initialLikedBy={blog.likedBy} /> */} {/*Will do likes later*/ }
        </Box>

        <Box sx={cardHeader(theme)}>
          <BlogAuthor avatar={blog.authorAvatar} username={blog.authorUsername} />
          <BlogDate date={blog.createdAt} />
        </Box>

        <Box>
          <BlogTitle title={blog.title} />
          <BlogSummary summary={blog.summary} />
        </Box>
      </Link>

      <BlogTags tags={blog.tags} />
    </Card>
  );
}