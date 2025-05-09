'use client';
// Navbar displays across pages, holds title, theme dropdown, new blog creation, and sign-in
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
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
  {/* Show text on sm+ and Home icon on xs */}
  <Typography
    variant="h6"
    sx={{
      display: { xs: 'none', sm: 'block' },
      fontWeight: 500,
      letterSpacing: 1,
      textTransform: 'uppercase',
      mr: 2,
    }}
  >
    Blogger
  </Typography>
  <Box
    sx={{
      display: { xs: 'flex', sm: 'none' },
      alignItems: 'center',
      justifyContent: 'center',
      mr: 2,
    }}
  >
    <HomeIcon fontSize="medium" />
  </Box>
</Link>

<ThemeToggle />

{/* Responsive Divider margin */}
<Box
  sx={{
    height: 24,
    width: '1px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    ml: { xs: 1, sm: 2 },
    mr: { xs: 2, sm: 3.5 },
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