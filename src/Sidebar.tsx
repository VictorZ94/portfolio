import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import  useTheme from './theme';
import { Hero } from './sections/Hero';
import { useMediaQuery } from '@mui/material';
import { About } from './sections/About';

const drawerWidth = 240;

const navigationLinks = [
  { label: 'Hero', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

function ResponsiveDrawerContent() {
  const { colorScheme } = useTheme();

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
      <Box sx={{ textAlign: 'center', mt: 2, mb: 3, flexShrink: 0 }}>
        <Avatar
          alt="Victor Zuluaga"
          sx={{
            width: 120,
            height: 120,
            mx: 'auto',
            mb: 2,
            bgcolor: colorScheme.accent,
          }}
        >
          VZ
        </Avatar>
        <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: colorScheme.text, mb: 0.5 }}>
          Victor Zuluaga
        </Typography>
        <Typography
          sx={{
            fontSize: '0.85rem',
            color: colorScheme.textSecondary,
          }}
        >
          Full-Stack Engineer
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List sx={{ flex: 1, py: 0 }}>
        {navigationLinks.map((link) => (
          <ListItem key={link.id} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(link.id)}
              sx={{
                py: 1.5,
                '&:hover': {
                  bgcolor: colorScheme.accent,
                  color: '#FFFFFF',
                },
              }}
            >
              <ListItemText
                primary={link.label}
                sx={{
                  '& .MuiTypography-root': {
                    fontSize: '0.95rem',
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Stack
        direction="row"
        spacing={1}
        sx={{
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <IconButton
          size="small"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: colorScheme.primary }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          size="small"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: colorScheme.primary }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          size="small"
          href="mailto:zrvictor00@gmail.com"
          sx={{ color: colorScheme.primary }}
        >
          <EmailIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { colorScheme } = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = <ResponsiveDrawerContent />;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            bgcolor: colorScheme.surface,
          color: colorScheme.text,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {isMobile && <Toolbar />}
        <Hero />
        <About  />
      </Box>
    </Box>
  );
}
