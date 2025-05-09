'use client';

import { useState, useRef } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  IconButton
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  uploadWrapper,
  uploadPreview,
  uploadDropZone,
  uploadErrorText,
  uploadIconButton,
  uploadTitle,
} from '@/styles/customStyles';

export default function CoverImageUpload({ onUpload }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const inputRef = useRef(null);

  const handleFile = async (file) => {
    if (!file) return;

    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');

      setImageUrl(data.url);
      onUpload(data.url); // Pass image URL to parent
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }


  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files.length) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <Box sx={uploadWrapper}> {/**Update uploadWrapper to restyle dropbox */}
      <Typography sx={uploadTitle}>Upload Cover Image*</Typography>

      <Box
        onClick={() => inputRef.current.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        sx={uploadDropZone}
      >
        {/** Show a loading circle while picture is loading, otherwise instruct user */}
        {uploading ? (
          <CircularProgress size={28} color="inherit" />
        ) : (
          <>
            <CloudUploadIcon sx={{ fontSize: 36, mb: 1 }} />
            <Typography variant="body2">
              {imageUrl ? 'Replace Cover Image' : 'Drag and drop an image, or click to upload'}
            </Typography>
          </>
        )}
        <input
          type="file"
          accept="image/*"
          hidden
          ref={inputRef}
          onChange={handleChange}
        />
      </Box>

      {error && <Typography sx={uploadErrorText}>{error}</Typography>}

      {/** Image previewing, adjust styling here */}
      {imageUrl && (
        <Box sx={uploadPreview}>
          <img
            src={imageUrl}
            alt="Cover Preview"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              objectFit: 'cover',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <IconButton
            onClick={() => {
              setImageUrl('');
              onUpload('');
              if (inputRef.current) {
                inputRef.current.value = '';
              }
            }}
            sx={uploadIconButton}
            size="small"
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}