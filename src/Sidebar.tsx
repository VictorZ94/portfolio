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
import { Stack, useTheme, useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'motion/react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { GitHubStats } from './sections/GitHubStats';
import { Contact } from './sections/Contact';
import { Avatar } from './components/Avatar';
import { ThemeToggle } from './components/ThemeToggle';
import { InkSwatches } from './components/InkSwatches';

const drawerWidth = 240;

const navigationLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'GitHub stats', id: 'github' },
  { label: 'Contact', id: 'contact' },
] as const;

const socialLinks = [
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/victorz94' },
  { icon: EmailIcon, label: 'Email', href: 'mailto:zrvictor00@gmail.com' },
] as const;

function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = React.useState<string>(ids[0]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

function DrawerContent({
  activeId,
  onNavigate,
}: {
  activeId: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        px: 3,
        py: 4,
      }}
    >
      {/* Masthead */}
      <Box sx={{ mb: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Avatar size={80} />
        </motion.div>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: '1rem',
            color: 'var(--ink-text)',
            lineHeight: 1.25,
            letterSpacing: '-0.015em',
          }}
        >
          Victor Zuluaga
        </Typography>
      </Box>

      <List
        sx={{ flex: 1, py: 0, mb: 2 }}
        component="nav"
        aria-label="Section navigation"
      >
        {navigationLinks.map((link, i) => {
          const isActive = activeId === link.id;
          return (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2 + i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => onNavigate(link.id)}
                  selected={isActive}
                  aria-current={isActive ? 'true' : undefined}
                  sx={{
                    py: 0.9,
                    pl: 1.5,
                    borderRadius: 1,
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: `translateY(-50%) scaleY(${isActive ? 1 : 0})`,
                      transformOrigin: 'center',
                      width: 2,
                      height: 16,
                      borderRadius: 1,
                      backgroundColor: 'var(--ink-primary)',
                      transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                    },
                    '&.Mui-selected': {
                      bgcolor: 'var(--paper-2)',
                      '&:hover': { bgcolor: 'var(--paper-2)' },
                      '& .MuiTypography-root': {
                        color: 'var(--ink-text)',
                        fontWeight: 600,
                      },
                    },
                    '&:hover': {
                      bgcolor: 'var(--paper-2)',
                      '& .MuiTypography-root': {
                        color: 'var(--ink-text)',
                      },
                    },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    sx={{
                      '& .MuiTypography-root': {
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: 'var(--ink-soft)',
                        letterSpacing: '-0.005em',
                        transition: 'color 0.2s ease',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </motion.div>
          );
        })}
      </List>

      <Divider sx={{ borderColor: 'var(--border)', my: 1.5 }} />

      <Stack
        direction="row"
        spacing={0.25}
        sx={{ alignItems: 'center', mb: 2 }}
      >
        {socialLinks.map(({ icon: Icon, label, href }) => (
          <IconButton
            key={label}
            size="small"
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={label}
            sx={{
              color: 'var(--ink-mute)',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: 'var(--ink-primary)',
                backgroundColor: 'transparent',
              },
            }}
          >
            <Icon fontSize="small" />
          </IconButton>
        ))}
      </Stack>

      {/* === Bottom control panel === */}
      <Box
        sx={{
          mt: 'auto',
          pt: 2,
          borderTop: '1px solid var(--border)',
        }}
      >
        <Stack spacing={1.5}>
          <ThemeToggle />
          <InkSwatches />
        </Stack>
      </Box>
    </Box>
  );
}

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const activeId = useActiveSection(navigationLinks.map((l) => l.id));

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    if (isMobile) {
      setIsClosing(true);
      setMobileOpen(false);
    }
  };

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

  const drawer = (
    <DrawerContent activeId={activeId} onNavigate={handleNavClick} />
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {isMobile && (
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: 'var(--paper)',
            color: 'var(--ink-text)',
            borderBottom: '1px solid var(--border)',
            boxShadow: 'none',
            backgroundImage: 'none',
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open navigation drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.95rem',
                letterSpacing: '-0.01em',
              }}
            >
              Victor Zuluaga
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="Primary navigation"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'var(--paper)',
              borderRight: '1px solid var(--border)',
              backgroundImage: 'none',
            },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: '1px solid var(--border)',
              backgroundColor: 'var(--paper)',
              backgroundImage: 'none',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {isMobile && <Toolbar />}
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <GitHubStats />
        <Contact />
      </Box>
    </Box>
  );
}