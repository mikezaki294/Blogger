'use client';
// Displays whether a user has liked the blog or not
// Flagged for refactor/future update

import { useState, useEffect } from 'react';
import { IconButton, Tooltip, Box, useTheme } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSession } from 'next-auth/react';
import { likesContainer, likeIconButton } from '@/styles/blogLikesStyles';

export default function BlogLikes({ blogId, initialLikedBy = [] }) {
  const theme = useTheme();
  const { data: session, status } = useSession();
  const userId = session?.user?.id;

  const [likedBy, setLikedBy] = useState(initialLikedBy);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (status === 'authenticated' && userId) {
      setIsLiked(initialLikedBy.includes(userId));
    }
  }, [status, userId, initialLikedBy]);

  const toggleLike = async () => {
    if (!userId) return;

    const updatedLikes = isLiked
      ? likedBy.filter(id => id !== userId)
      : [...likedBy, userId];

    setLikedBy(updatedLikes);
    setIsLiked(!isLiked);

    try {
      await fetch(`/api/blogs/likes`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blogId, userId }),
      });
    } catch (err) {
      console.error('❌ Failed to update like:', err);
      setLikedBy(likedBy);
      setIsLiked(isLiked);
    }
  };

  if (status !== 'authenticated') return null;

  return (
    <Box sx={likesContainer(theme)}>
      <Tooltip title={isLiked ? 'Unlike' : 'Like'} arrow>
        <IconButton onClick={toggleLike} sx={likeIconButton(isLiked, theme)}>
          {isLiked ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
        </IconButton>
      </Tooltip>
    </Box>
  );
}