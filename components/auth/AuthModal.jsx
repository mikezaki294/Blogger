'use client';
import { Dialog, DialogTitle, DialogContent, Stack, DialogActions, Button } from '@mui/material';
import AuthButton from './AuthButton';

// Handles the sign in button and opens sign in modal
// For additional logins, add more AuthButtons, pass provider, and update AuthButton and api/auth

export default function AuthModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sign In</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <AuthButton provider="github" onClose={onClose} />
          <AuthButton provider="google" onClose={onClose} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}