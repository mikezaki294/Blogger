'use client';
// reusable component for title,
// Currently working but needs cleanup
// Flagged for refactor

import { Box, Typography } from '@mui/material';
import { blogTitleBox, blogTitleText } from '@/styles/blogTitleStyles';

export default function BlogTitle({ title, onClick, variant = 'card' }) {
  return (
    <Box sx={blogTitleBox}>
      <Typography variant="h6" onClick={onClick} sx={blogTitleText(variant)}>
        {title}
      </Typography>
    </Box>
  );
}