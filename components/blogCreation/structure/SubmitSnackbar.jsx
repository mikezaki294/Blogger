'use client';

import { Snackbar, Alert } from '@mui/material';
// Alerts user on successful upload, closes after 3s

export default function SubmitSnackbar({ open, onClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
        Blog posted successfully!
      </Alert>
    </Snackbar>
  );
}