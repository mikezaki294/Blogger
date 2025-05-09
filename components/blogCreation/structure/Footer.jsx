'use client';
// Footer with submission and snackbar for user alert
// Flagged for refactor

import { Box } from '@mui/material';
import SubmitBlogButton from './SubmitBlogButton';
import SubmitSnackbar from './SubmitSnackbar';


export default function Footer({ isFormComplete, handleSubmit, successOpen, setSuccessOpen }) {
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
      <SubmitBlogButton disabled={!isFormComplete} onClick={handleSubmit} />
      <SubmitSnackbar open={successOpen} onClose={() => setSuccessOpen(false)} />
    </Box>
  );
}