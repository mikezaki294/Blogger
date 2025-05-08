'use client';
// Displays the body of the blog in full page view
import { Box, useTheme } from '@mui/material';

export default function BlogBody({ body }) {
  const theme = useTheme();

  return (
    <Box
      component="div"
      sx={{
        whiteSpace: 'pre-wrap',
        color: theme.palette.text.primary,
        fontSize: '1.2rem',
        lineHeight: 1.8,
        px: 4,
        my: 4,
      }}
    >
      {body}
    </Box>
  );
}