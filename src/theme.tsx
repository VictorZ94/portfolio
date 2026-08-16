import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily:
      '"Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
    h1: {
      fontFamily:
        '"Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily:
        '"Geist", ui-sans-serif, system-ui, system-ui, sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily:
        '"Geist", ui-sans-serif, system-ui, sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontFamily:
        '"Geist", ui-sans-serif, system-ui, sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily:
        '"Geist", ui-sans-serif, system-ui, sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily:
        '"Geist", ui-sans-serif, system-ui, sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily:
        '"Geist", ui-sans-serif, system-ui, sans-serif',
    },
    body2: {
      fontFamily:
        '"Geist", ui-sans-serif, system-ui, sans-serif',
    },
    button: {
      fontFamily:
        '"Geist", ui-sans-serif, system-ui, sans-serif',
      fontWeight: 500,
      letterSpacing: '-0.005em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: 'none',
          transition: 'all 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
          fontWeight: 500,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
          backgroundColor: '#18181b',
          fontFamily:
            '"Geist", ui-sans-serif, system-ui, sans-serif',
          fontSize: '0.7rem',
          letterSpacing: '0.01em',
          textTransform: 'none',
          padding: '6px 8px',
        },
        arrow: {
          color: '#18181b',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
  },
});