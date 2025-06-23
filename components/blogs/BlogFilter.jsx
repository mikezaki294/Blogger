// components/blogFeed/BlogFilter.jsx
'use client';

import { useState } from 'react';
import { Box, TextField, Button, Chip, Stack } from '@mui/material';

export default function BlogFilter({ searchQuery, setSearchQuery, filters, setFilters }) {
  const [input, setInput] = useState('');

  const handleAddFilter = () => {
    const trimmed = input.trim();
    if (trimmed && !filters.includes(trimmed)) {
      setFilters([...filters, trimmed]);
    }
    setInput('');
  };

  const handleDeleteFilter = (tagToDelete) => {
    setFilters(filters.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Box sx={{ mb: 4, textAlign: 'center' }}>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" flexWrap="wrap">
        <TextField
          label="Search or Filter by Tag"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAddFilter();
            }
          }}
          size="small"
        />
        <Button onClick={handleAddFilter} variant="contained">
          Filter
        </Button>
      </Stack>

      {filters.length > 0 && (
        <Stack direction="row" spacing={1} justifyContent="center" mt={2} flexWrap="wrap">
          {filters.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              onDelete={() => handleDeleteFilter(tag)}
              sx={{ backgroundColor: '#1a1a1a', color: '#fff' }}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}