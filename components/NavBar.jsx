'use client';
// Navbar displays across pages, holds title, theme dropdown, new blog creation, and sign-in
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import SignInTrigger from './auth/SignInTrigger';
import CreateBlogButton from './blogCreation/inputComponents/CreateBlogButton';
import { useRefresh } from '@/components/context/RefreshContext';
import ThemeToggle from './ThemeToggle'

export default function NavBar() {
  const { triggerRefresh } = useRefresh();

  return (
    <AppBar position="static" elevation={4}>
      <Toolbar>
        {/* Left: Title */}
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              letterSpacing: 1,
              textTransform: 'uppercase',
              mr: 2,
            }}
          >
            Blogger
          </Typography>
        </Link>

        <ThemeToggle />

        {/* Vertical Divider */}
        <Box
          sx={{
            height: 24,
            width: '1px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            ml: 2,
            mr: 3.5,
          }}
        />

        {/* Create Button */}
        <CreateBlogButton triggerRefresh={triggerRefresh} />

        <Box sx={{ flexGrow: 1 }} />

        {/* Sign-In Button */}
        <Box>
          <SignInTrigger />
        </Box>
      </Toolbar>
    </AppBar>
  );
}