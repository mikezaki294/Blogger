'use client';
// Reusable component for the tags of blogs

import { Box, Chip, Stack, useTheme } from '@mui/material';
import { tagWrapper, tagStack } from '@/styles/blogTagStyles';

export default function BlogTags({ tags }) {
  const theme = useTheme();

  return (
    <Box sx={tagWrapper(theme)}>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={tagStack(theme)}>
        {tags.map((tag, i) => (
          <Chip key={i} label={tag} />
        ))}
      </Stack>
    </Box>
  );
}