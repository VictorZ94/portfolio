import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Fragment Mono", "Courier New", ui-monospace, monospace',
    h1: {
      fontFamily: '"Boldonse", "Arial Black", system-ui, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Boldonse", "Arial Black", system-ui, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.01em',
    },
    h3: {
      fontFamily: '"Boldonse", "Arial Black", system-ui, sans-serif',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    h4: {
      fontFamily: '"Boldonse", "Arial Black", system-ui, sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Fragment Mono", "Courier New", monospace',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Fragment Mono", "Courier New", monospace',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Fragment Mono", "Courier New", monospace',
    },
    body2: {
      fontFamily: '"Fragment Mono", "Courier New", monospace',
    },
    button: {
      fontFamily: '"Boldonse", "Arial Black", system-ui, sans-serif',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 0,
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
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'uppercase',
          transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
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
          borderRadius: 0,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 0,
          backgroundColor: '#0a0a0a',
          fontFamily: '"Fragment Mono", "Courier New", monospace',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        },
        arrow: {
          color: '#0a0a0a',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});
