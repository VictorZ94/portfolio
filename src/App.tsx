import ResponsiveDrawer from './Sidebar.tsx'
import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme.tsx'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveDrawer />
    </ThemeProvider>
  )
}

export default App
