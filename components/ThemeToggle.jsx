'use client';
// Displays all themes via dropdown
// Scalable for additional future themes, just import and add to themeOptions
import { useThemeToggle } from '@/components/context/ThemeContext';
import { Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { useState } from 'react';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const themeOptions = [
  { name: 'dark', icon: <DarkModeIcon />, label: 'Midnight' },
  { name: 'beach', icon: <BeachAccessIcon />, label: 'Beach' },
  // Add more themes here later
];

export default function ThemeToggle() {
  const { themeName, toggleTheme } = useThemeToggle();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (theme) => {
    if (theme !== themeName) toggleTheme();
    handleClose();
  };

  const current = themeOptions.find(t => t.name === themeName);

  return (
    <Box>
      <Tooltip title="Change Theme">
        <IconButton onClick={handleOpen} color="inherit">
          {current?.icon}
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {themeOptions.map(option => (
          <MenuItem
            key={option.name}
            selected={option.name === themeName}
            onClick={() => handleSelect(option.name)}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {option.icon}
              {option.label}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}