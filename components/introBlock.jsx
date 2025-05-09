'use client';

import { Box, Typography, useTheme } from '@mui/material';
import { introWrapper, introContent } from '@/styles/introBlockStyles';

export default function IntroBlock() {
  const theme = useTheme();

  return (
    <Box sx={introWrapper(theme)}>
      <Box sx={introContent(theme)}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Welcome to Blogger
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 900, color: theme.palette.text.secondary }}>
          Explore insightful articles, personal stories, and thoughtful commentary from our global community.
          Whether you're here to read, write, or both — you're in the right place.
        </Typography>
      </Box>
    </Box>
  );
}
