'use client';
import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

export default function AuthButton({ provider, onClose }) {
  // Icons and labels for login providers. Pass provider as prop, display matching icon/label
  const icons = {
    github: <GitHubIcon />,
    google: <GoogleIcon />,
  };

  const labels = {
    github: 'GitHub',
    google: 'Google',
  };

  if (!provider || !labels[provider]) return null;

  return (
    <Button
      variant="modal"
      sx={{ fontSize: '1.25rem'}}
      startIcon={icons[provider]}
      onClick={() => {
        signIn(provider, { callbackUrl: '/' });
        onClose?.();
      }}
    >
      Sign in with {labels[provider]}
    </Button>
  );
}