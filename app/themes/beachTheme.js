// app/themes/beachTheme.js

import { createTheme } from '@mui/material/styles';

const beachTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f2e5c7', // softened sand tone
      paper: '#fcf6e3',   // warm paper
      intro: '#fff4dc',
    },
    text: {
      primary: '#4e4e4e',
      secondary: '#757575',
      tertiary: 'f2e5c7'
    },
    primary: {
      main: '#00bcd4',
    },
    secondary: {
      main: '#ffb74d',
    },
  },
  typography: {
    fontFamily: '"Geist", "Geist Mono", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(to bottom, #f2e5c7 0%, #fff8e1 100%)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#faefcd',
          color: '#4e4e4e',
          boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
          borderRadius: 8,
          fontSize: '1rem',
          '& input': {
            color: '#4e4e4e',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#d6cfc1',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4e4e4e',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#6d6d6d',
          fontSize: '0.95rem',
          '&.Mui-focused': {
            color: '#4e4e4e',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#e0f2f1',
          color: '#00695c',
          border: '1px solid #00bcd4',
          fontWeight: 500,
        },
        deleteIcon: {
          color: '#4e4e4e',
          '&:hover': {
            color: '#d84315',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(135deg, #e0f7fa, #fffbe6)',
          color: '#4e4e4e',
          borderRadius: 16,
          padding: '16px',
          boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
          minWidth: 420,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #fff6dc, #e3f2fd)',
          color: '#4e4e4e',
          border: '1px solid rgba(0,0,0,0.05)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 24px',
          fontWeight: 500,
          textTransform: 'none',
          borderRadius: 8,
        },
        contained: {
          backgroundColor: '#00bcd4',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#0097a7',
          },
        },
        outlined: {
          borderColor: '#00bcd4',
          color: '#00bcd4',
          '&:hover': {
            borderColor: '#007c91',
            backgroundColor: 'rgba(0,188,212,0.08)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'modal' },
          style: {
            backgroundColor: '#00bcd4',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            '&:hover': {
              backgroundColor: '#0097a7',
              boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
            },
          },
        },
        {
          props: { variant: 'expandable' },
  style: {
    minWidth: 0,
    height: 48,
    px: 1.5,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: '#fff',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    border: '1px solid rgba(255,255,255,0.25)',
    transition: 'all 0.3s ease',
    boxShadow: '0 1px 6px rgba(0,0,0,0.2)',
    backdropFilter: 'blur(4px)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
    '&.Mui-disabled': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: '#eee',
      cursor: 'not-allowed',
    },
  },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #00bcd4, #4dd0e1, #00bcd4)',
          color: '#fff',
          boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
        },
      },
    },
  },
});

export default beachTheme;