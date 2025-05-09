'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import {
  Box,
  Container,
  Divider,
  CircularProgress,
  Typography,
} from '@mui/material';

import BlogAuthor from '../blogs/blogComponents/blogAuthor';
import BlogDate from '../blogs/blogComponents/blogDate';
import BlogImage from '../blogs/blogComponents/blogImage';
import BlogTags from '../blogs/blogComponents/blogTags';
import BlogTitle from '../blogs/blogComponents/blogTitle';
import BlogBody from '../blogs/blogComponents/blogBody';
import BlogContentWrapper from '../blogs/blogComponents/blogContentWrapper';
import { fullHeaderWrapper, fullMetaRow } from '@/styles/fullBlogStyles';

export default function BlogContent({ initialData }) {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const preloaded = {
    title: searchParams.get('title'),
    coverImageUrl: searchParams.get('coverImageUrl'),
    authorUsername: searchParams.get('authorUsername'),
    authorAvatar: searchParams.get('authorAvatar'),
    createdAt: searchParams.get('createdAt'),
  };
  const [blog, setBlog] = useState(initialData || null);
  const [loading, setLoading] = useState(!initialData);



  useEffect(() => {
    if (initialData) return;


    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error('Error loading blog:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, initialData]);



  if (!blog && !loading) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h4">Blog Not Found</Typography>
      </Container>
    );
  }


  return (
    <Container >
      <BlogContentWrapper>
        <Box sx={fullHeaderWrapper}>
          <BlogTitle title={blog?.title || preloaded.title} variant="full" />
          <Box sx={fullMetaRow}>
            <BlogAuthor avatar={blog?.authorAvatar || preloaded.authorAvatar} username={blog?.authorUsername || preloaded.authorUsername} variant="full" />
            <BlogDate date={blog?.createdAt || preloaded.createdAt} />
          </Box>
          <BlogImage imageUrl={blog?.coverImageUrl || preloaded.coverImageUrl} full />
        </Box>

        <Divider variant="full" />

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <BlogBody body={blog.body} />
            <BlogTags tags={blog.tags} variant="full" />
          </>
        )}
      </BlogContentWrapper>
    </Container>
  );
}
