'use client';

import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider as ThemeToggleProvider, useThemeToggle } from '@/components/context/ThemeContext';

function InnerThemeWrapper({ children }) {
  const { theme } = useThemeToggle();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default function ThemeRegistry({ children }) {
  return (
    <ThemeToggleProvider>
      <InnerThemeWrapper>
        {children}
      </InnerThemeWrapper>
    </ThemeToggleProvider>
  );
}