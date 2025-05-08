'use client';
// Displays image, pass card or full to change image styling
import { Box, useTheme } from '@mui/material';
import { cardCoverImage, fullCoverImage } from '@/styles/imageStyles';
import { useState } from 'react';

export default function BlogImage({ imageUrl, card, full }) {
  const theme = useTheme();
  const [bgImageUrl, setBgImageUrl] = useState(imageUrl);

  const handleImageError = () => {
    setBgImageUrl('https://via.placeholder.com/800x600?text=Image+Not+Found');
  };

  const style = card
    ? cardCoverImage(theme, bgImageUrl)
    : full
    ? fullCoverImage(theme, bgImageUrl)
    : {};

  return (
    <Box
      sx={style}
      component="div"
      onError={handleImageError}
    />
  );
}