// app/themes/darkTheme.js

import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#242424',
      paper: '#1a1a1a',
      intro: '#191919',
    },
    text: {
      primary: '#bbb',
      secondary: '#999',
      tertiary: '#bbb',
    },
  },
  typography: {
    fontFamily: '"Geist", "Geist Mono", sans-serif',
  },
  components: {


    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
          color: '#ddd',
          boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
          borderRadius: 8,
          fontSize: '1rem',
          '& input': {
            color: '#ddd',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#444',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ddd',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ddd',
          fontSize: '0.95rem',
          '&.Mui-focused': {
            color: '#ddd',
          },
        },
      },
    },

    MuiChip: {
  styleOverrides: {
    root: {
      backgroundColor: '#1a1a1a',
      color: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
      border: '1px solid #444',
      fontWeight: 500,
    },
    deleteIcon: {
      color: '#aaa',
      '&:hover': {
        color: '#fff',
      },
    },
  },
},

    MuiDialog: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(135deg, #0b0b0b, #2a2a2a, #0b0b0b)',
          color: '#bbb',
          borderRadius: 16,
          padding: '16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.8)',
          minWidth: 420, // default width
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #0b0b0b, #2a2a2a, #0b0b0b)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.05)',
          backdropFilter: 'blur(4px)',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '1.25rem',
          paddingBottom: 0,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingTop: '8px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: 'flex-end',
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
          backgroundColor: '#2e2e2e',
          color: '#bbb',
          '&:hover': {
            backgroundColor: '#3a3a3a',
          },
        },
        outlined: {
          borderColor: '#555',
          color: '#bbb',
          '&:hover': {
            borderColor: '#888',
            backgroundColor: 'rgba(255,255,255,0.05)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'disabled' },
          style: {
            backgroundColor: '#rgba(255,255,255,0.04)',
            color: '#777',
            cursor: 'not-allowed',
            '&:hover': {
              backgroundColor: '#rgba(255,255,255,0.04)', // keep same color on hover
            },
          },

          props: { variant: 'expandable' },
          style: {
            minWidth: 0,
            height: 48,
            px: 1.5,
            backgroundColor: 'rgba(255,255,255,0.06)',
            color: '#fff',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            boxShadow: '0 0 6px rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.12)',
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(255,255,255,0.04)',
              color: '#777',
              cursor: 'not-allowed',
            },
          },
        },
        {
          props: { variant: 'modal' },
          style: {
            backgroundColor: '#3a3a3a',
            color: '#eee',
            boxShadow: '0 4px 12px rgba(0,0,0,0.7)',
            '&:hover': {
              backgroundColor: '#4a4a4a',
              boxShadow: '0 6px 16px rgba(0,0,0,0.8)',
            },
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #0b0b0b, #333333, #0b0b0b)',
          color: '#fff',
          backdropFilter: 'blur(4px)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.6)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
          borderRadius: '0 0 10px 10px',
        },
      },
    },
    MuiTypography: {
    styleOverrides: {
      h6: {
        '&:hover': {
          color: '#bbb', // highlight on hover
        },
        cursor: 'pointer',
      },
    },
  },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
        },
      },
    },
  },
});

export default darkTheme;