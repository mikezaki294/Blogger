'use client';
// Wraps the entirety of the full view page to separate from background
import { Box, useTheme } from '@mui/material';

export default function BlogContentWrapper({ children }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3],
        my: 2,
      }}
    >
      {children}
    </Box>
  );
}