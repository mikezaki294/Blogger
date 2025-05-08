'use client';
// Reusable component displaying the author of a blog
import { Avatar, Box, Typography } from '@mui/material';
import { authorBox, authorAvatar } from '@/styles/authorStyles';

export default function BlogAuthor({ avatar, username, variant = 'card' }) {
  // Passing variant changes how the author box is displayed on card vs full blog view
  return (
    <Box sx={authorBox(variant)}>
      <Avatar
        src={avatar}
        alt={username}
        sx={authorAvatar(variant)}
      />
      <Typography variant="body2">{username}</Typography>
    </Box>
  );
}