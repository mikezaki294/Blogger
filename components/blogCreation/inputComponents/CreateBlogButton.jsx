'use client';
// Handles opening the modal to create a new blog
import { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import BlogModal from '../BlogModal';
import { useSession } from 'next-auth/react';

export default function CreateBlogButton({ triggerRefresh }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [hovered, setHovered] = useState(false);
  const { status } = useSession();

  // Prevent user from opening the modal if not logged in
  const isLoggedIn = status === 'authenticated';

  return (
    <>
      <Button
        variant="expandable"
        onClick={handleOpen}
        // disabled={!isLoggedIn}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          width: hovered ? 200 : 48,
          borderRadius: hovered ? '24px' : '50%',
          justifyContent: hovered ? 'flex-start' : 'center',
          gap: hovered ? 1 : 0,
        }}
      >
        <EditNoteIcon sx={{ fontSize: 22, flexShrink: 0 }} />
        {hovered && (
          <Box
            component="span"
            sx={{
              opacity: 1,
              transition: 'opacity 0.3s ease',
              ml: 1,
              fontWeight: 500,
              fontSize: '0.9rem',
            }}
          >
            Create a new blog!
          </Box>
        )}
      </Button>
        <BlogModal
          open={open}
          handleClose={handleClose}
          triggerRefresh={triggerRefresh}
        />
      {/* {isLoggedIn && (
        <BlogModal
          open={open}
          handleClose={handleClose}
          triggerRefresh={triggerRefresh}
        />
      )} */}
    </>
  );
}