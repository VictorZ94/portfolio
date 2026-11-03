import { createTheme } from '@mui/material/styles';

const font = '"Hanken Grotesk", "Helvetica Neue", Arial, sans-serif';

export const theme = createTheme({
  typography: {
    fontFamily: font,
    button: {
      fontFamily: font,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'var(--bg)',
          color: 'var(--text)',
        },
      },
    },
  },
});
