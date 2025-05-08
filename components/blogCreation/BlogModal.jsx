'use client';
//Modal holding the create functionality

import { Modal, Box, Paper } from '@mui/material';
import CreateBlog from './CreateBlog';

export default function BlogModal({ open, handleClose, triggerRefresh }) {
  return (
    <Modal open={open} onClose={handleClose}>
      {/** Styling and layout for modal here */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90vw',
          maxWidth: 1100,
          p: 0,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            borderRadius: 2,
            p: 4,
            maxHeight: '85vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CreateBlog handleClose={handleClose} triggerRefresh={triggerRefresh} />
        </Paper>
      </Box>
    </Modal>
  );
}