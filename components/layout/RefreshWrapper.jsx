'use client';
// Holds Navbar in place across pages and needed for blogs refresh after new post
import NavBar from '@/components/NavBar';
import { useRefresh } from '@/components/context/RefreshContext';
import { Box } from '@mui/material';

export default function RefreshWrapper({ children }) {
  const { triggerRefresh } = useRefresh();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NavBar triggerRefresh={triggerRefresh} />

      {/* Main scrollable content */}
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        {children}
      </Box>
    </Box>
  );
}