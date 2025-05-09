'use client';

// Handles the area that contains sign in/out.
// Flagged for refactor/separation

import { useSession, signOut } from 'next-auth/react';
import { useTheme } from '@mui/material'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Avatar,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import AuthButton from './AuthButton';
import { authenticatedUserBox } from '@/styles/customStyles';


export default function SignInTrigger() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  //*** Signed in */

  if (status === 'authenticated') {
    return (
      <Box
        sx={authenticatedUserBox(theme)}
      >
        <Avatar
          src={session.user.image}
          alt={session.user.name}
          sx={{ width: 34, height: 34, borderRadius: 2 }}
        />
        <Typography
          sx={{  color: 'text.tertiary', fontWeight: 600, display: { xs: 'none', md: 'block' }, }}
        >
          {session.user.name}
        </Typography>
        <IconButton
          onClick={() => signOut({ callbackUrl: '/' })}
          sx={{
            color: 'text.secondary',
            '&:hover': {
              color: 'text.primary',
            },
          }}
        >
          <LogoutIcon fontSize="md" />
        </IconButton>
      </Box>
    );
  }

  //*** Not signed in */
  return (
    <>
    <Button
  variant="modal"
  onClick={() => setOpen(true)}
  sx={{
    fontSize: { xs: '0.8rem', sm: '1rem' },
    padding: { xs: '4px 12px', sm: '8px 24px' },
    minHeight: { xs: 36, sm: 40 },
  }}
>
  Log In
</Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle
          sx={{
            fontSize: '1.5rem',
            fontWeight: 600,
            mb: 1,
          }}
        >
          Log In
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 3 }}>
            <AuthButton provider="github" onClose={() => setOpen(false)} />
            <AuthButton provider="google" onClose={() => setOpen(false)} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="modal" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}