'use client';
// Header with submit button and modal title
// Snackbar alerts the user on successful upload

import { Box, Typography } from '@mui/material';
import { layoutStyles } from '@/styles/customStyles';
import SubmitBlogButton from './SubmitBlogButton';
import SubmitSnackbar from './SubmitSnackbar';

export default function Header({ isFormComplete, handleSubmit, successOpen, setSuccessOpen }) {
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

      <SubmitBlogButton disabled={!isFormComplete} onClick={handleSubmit} />
      <SubmitSnackbar open={successOpen} onClose={() => setSuccessOpen(false)} />
    </Box>
  );
}