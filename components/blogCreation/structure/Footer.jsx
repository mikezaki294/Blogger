'use client';

import { Box, Button } from '@mui/material';
// Footer with a cancel button
// Flagged for refactor

export default function Footer({ handleClose }) {
  return (
    <Box
      sx={(theme) => ({
        position: 'sticky',
        bottom: 0,
        zIndex: 10,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
        px: 3,
        py: 1,
        borderTop: `1px solid ${theme.palette.divider}`,
        backdropFilter: 'blur(2px)',
      })}
    >
      <Button
        variant="modal"
        onClick={handleClose}
        sx={{ fontSize: '0.875rem' }}
      >
        Cancel
      </Button>
    </Box>
  );
}