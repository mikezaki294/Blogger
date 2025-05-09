'use client';

import { Box, Typography, useTheme } from '@mui/material';
import { introWrapper, introContent } from '@/styles/introBlockStyles';

export default function IntroBlock() {
  const theme = useTheme();

  return (
    <Box sx={introWrapper(theme)}>
      <Box sx={introContent(theme)}>
        <Typography variant="h5" fontWeight={600} gutterBottom sx={{
            fontSize: {
              xs: '1.5rem',
              sm: '2rem',
              lg: '2.25rem',
              xl: '2.5rem',
            },}}>
          Welcome to Blogger
        </Typography>
        <Typography variant="body1"
          sx={{

            color: theme.palette.text.secondary,
            fontSize: {
              xs: '1rem',
              sm: '1.05rem',
              lg: '1.15rem',
              xl: '1.25rem',
            },
          }}>
          Explore insightful articles, personal stories, and thoughtful commentary from our global community.
          Whether you're here to read, write, or both — you're in the right place.
        </Typography>
      </Box>
    </Box>
  );
}
