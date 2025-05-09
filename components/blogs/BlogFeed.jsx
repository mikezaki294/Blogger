'use client';
// Holds all blogs and displays them
// Currently uses infinite scrolling in batches of 6 blogs
// Flagged for refactor
  // Change flex to grid
  // Loading icon for inf scroll
  // Move inline styling

import { useEffect, useState, useRef } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Grid
} from '@mui/material';

import BlogCard from './BlogCard';
import { motion } from 'framer-motion';

export default function BlogFeed({ refreshBlogs }) {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef();

  // Initial load + re-fetch on refreshBlogs toggle
  useEffect(() => {
    let didCancel = false;

    const fetchInitialBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/blogs?page=1&limit=6`);
        const data = await res.json();

        if (!didCancel) {
          const unique = Array.from(new Map(data.blogs.map(b => [b._id, b])).values());
          setBlogs(unique);
          setPage(2); // ready to fetch page 2 on scroll
          setHasMore(data.blogs.length === 3); // set false if fewer than 6
        }
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
      } finally {
        if (!didCancel) setLoading(false);
      }
    };

    fetchInitialBlogs();

    return () => { didCancel = true; };
  }, [refreshBlogs]);

  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setLoading(true);
          try {
            const res = await fetch(`/api/blogs?page=${page}&limit=6`);
            const data = await res.json();

            setBlogs(prev => {
              const combined = [...prev, ...data.blogs];
              const unique = Array.from(new Map(combined.map(b => [b._id, b])).values());
              return unique;
            });

            setPage(prev => prev + 1);
            setHasMore(data.hasMore);
          } catch (err) {
            console.error('Infinite scroll fetch failed:', err);
          } finally {
            setLoading(false);
          }
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [page, hasMore, loading]);

  return (
    <Box sx={{ px: 2, py: 4, maxWidth: '90vw', mx: 'auto' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 6, // 32px gap between cards
        }}
      >
        {blogs.map((blog) => (
          <Box
            key={blog._id}
            sx={{
              flexGrow: 1,
              flexBasis: 'clamp(280px, 30%, 400px)',
              maxWidth: '400px',
              minWidth: '400px',
            }}
          >
            <BlogCard blog={blog} />
          </Box>
        ))}
      </Box>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress color="inherit" />
        </Box>
      )}

      <div ref={loaderRef} style={{ height: '1px', marginTop: '20px' }} />
    </Box>
  );
}