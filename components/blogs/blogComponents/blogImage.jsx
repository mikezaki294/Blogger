'use client';

import { Box, useTheme } from '@mui/material';
import Image from 'next/image';
import { cardCoverImage, fullCoverImage } from '@/styles/imageStyles';
import { useState } from 'react';

export default function BlogImage({ imageUrl, card, full }) {
  const [imgSrc, setImgSrc] = useState(imageUrl);
  const fallback = 'https://via.placeholder.com/800x600?text=Image+Not+Found';

  const handleImageError = () => {
    setImgSrc(fallback);
  };

  const containerStyle = card ? cardCoverImage : full ? fullCoverImage : {};

  return (
    <Box sx={containerStyle}>
      <Image
        src={imgSrc}
        alt="Blog Cover"
        fill
        style={{ objectFit: 'cover', objectPosition: 'top' }}
        onError={handleImageError}
        sizes="100vw"
        priority={!!full}
      />
    </Box>
  );
}