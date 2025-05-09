'use client';
// Header with cancel and modal title

import { Box, Typography, AppBar, Button } from '@mui/material';
import { layoutStyles } from '@/styles/customStyles';
import SubmitBlogButton from './SubmitBlogButton';
import SubmitSnackbar from './SubmitSnackbar';

export default function Header({ handleClose }) {
  return (
    <Box
      sx={(theme) => ({ ...layoutStyles.headerBox,
        background: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Typography
        variant="h5"
        sx={(theme) => ({
          fontWeight: 600,
          letterSpacing: 1,
          textTransform: 'uppercase',
          color: theme.palette.text.primary,
        })}
      >
        Create a New Blog
      </Typography>

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