'use client';

import Box from '@mui/material/Box';
import BlogFeed from './blogs/BlogFeed';
import { useRefresh } from './context/RefreshContext';

export default function MainPage() {
  // refresh here part of the setup for refreshing blogs after new post
  const { refreshBlogs } = useRefresh();

  // 86dvh works cleanly with the navbar on desktop, may need adjustments for mobile
  return (
    <Box sx={{ height: '86dvh', overflow: 'auto' }}>
      <BlogFeed refreshBlogs={refreshBlogs} />
    </Box>
  );
}