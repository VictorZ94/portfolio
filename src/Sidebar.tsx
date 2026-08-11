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
import { Contact } from './sections/Contact';
import { Avatar } from './components/Avatar';
import { HandDrawnArrow } from './components/HandDrawnArrow';
import { ThemeToggle } from './components/ThemeToggle';
import { InkSwatches } from './components/InkSwatches';

const drawerWidth = 260;

const navigationLinks = [
  { label: 'Hero', id: 'hero', num: '01' },
  { label: 'About', id: 'about', num: '02' },
  { label: 'Experience', id: 'experience', num: '03' },
  { label: 'Projects', id: 'projects', num: '04' },
  { label: 'Skills', id: 'skills', num: '05' },
  { label: 'Contact', id: 'contact', num: '06' },
] as const;

const socialLinks = [
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    href: 'https://github.com/victorz94',
  },
  {
    icon: EmailIcon,
    label: 'Email',
    href: 'mailto:zrvictor00@gmail.com',
  },
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
        py: 3.5,
        position: 'relative',
      }}
    >
      {/* Issue/Vol header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          mb: 2,
          pb: 1.5,
          borderBottom: '1.5px solid var(--ink-text)',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-stamp)',
            fontSize: '0.85rem',
            color: 'var(--ink-primary)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            transform: 'rotate(-1deg)',
          }}
        >
          zine
        </Typography>
        <Typography
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--ink-text-mute)',
            letterSpacing: '0.15em',
          }}
        >
          vol.01 / 2026
        </Typography>
      </Box>

      <Box sx={{ mb: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 12, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Avatar size={100} />
        </motion.div>
      </Box>

      <Box sx={{ mb: 1 }}>
        <Typography
          sx={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.5rem',
            color: 'var(--ink-text)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            mb: 0.5,
          }}
        >
          Victor
          <br />
          Zuluaga
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--ink-text-mute)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            full-stack engineer
          </Typography>
        </Box>
      </Box>

      {/* Hand-drawn arrow */}
      <Box sx={{ ml: 'auto', mr: 1, mb: 1 }}>
        <HandDrawnArrow
          width={70}
          height={36}
          color="var(--ink-primary)"
          rotation={-12}
          delay={0.8}
        />
      </Box>

      <List
        sx={{ flex: 1, py: 0, mb: 1 }}
        component="nav"
        aria-label="Section navigation"
      >
        {navigationLinks.map((link, i) => {
          const isActive = activeId === link.id;
          return (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => onNavigate(link.id)}
                  selected={isActive}
                  aria-current={isActive ? 'true' : undefined}
                  sx={{
                    py: 1,
                    pl: 1,
                    borderRadius: 0,
                    position: 'relative',
                    transition:
                      'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: `translateY(-50%) scaleY(${isActive ? 1 : 0})`,
                      width: 3,
                      height: 18,
                      backgroundColor: 'var(--ink-primary)',
                      transition:
                        'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                    },
                    '&.Mui-selected': {
                      bgcolor: 'transparent',
                      '&:hover': { bgcolor: 'rgba(255,72,176,0.06)' },
                      '& .MuiTypography-root': {
                        color: 'var(--ink-primary)',
                      },
                      '& .nav-num': {
                        color: 'var(--ink-primary)',
                      },
                    },
                    '&:hover': {
                      bgcolor: 'rgba(26, 26, 26, 0.04)',
                      transform: 'translateX(2px)',
                      '& .MuiTypography-root': {
                        color: 'var(--ink-primary)',
                      },
                    },
                  }}
                >
                  <Typography
                    className="nav-num"
                    sx={{
                      fontFamily: 'var(--font-stamp)',
                      fontSize: '0.7rem',
                      color: 'var(--ink-text-mute)',
                      mr: 1.5,
                      letterSpacing: '0.05em',
                      minWidth: 20,
                      transition: 'color 0.35s ease',
                    }}
                  >
                    {link.num}
                  </Typography>
                  <ListItemText
                    primary={link.label}
                    sx={{
                      '& .MuiTypography-root': {
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--ink-text)',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase',
                        transition: 'color 0.35s ease',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </motion.div>
          );
        })}
      </List>

      <Divider
        sx={{
          borderColor: 'var(--ink-text)',
          borderBottomWidth: '1.5px',
          my: 1.5,
        }}
      />

      <Stack
        direction="row"
        spacing={0.5}
        sx={{ alignItems: 'center', mb: 1.5 }}
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
              color: 'var(--ink-text)',
              borderRadius: 0,
              transition:
                'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
              '&:hover': {
                color: 'var(--ink-primary)',
                transform: 'rotate(-8deg) scale(1.15)',
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
          pt: 1.5,
          borderTop: '1.5px dashed var(--ink-text-mute)',
        }}
      >
        <Stack spacing={1.25}>
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
            borderBottom: '2px solid var(--ink-text)',
            boxShadow: 'none',
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
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
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
              borderRight: '2px solid var(--ink-text)',
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
              borderRight: '2px solid var(--ink-text)',
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
        <Contact />
      </Box>
    </Box>
  );
}
