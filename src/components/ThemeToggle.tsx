import { Box } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import { motion } from 'motion/react';
import { useThemeSettings } from '../context/useThemeSettings';

export function ThemeToggle() {
  const { mode, toggleMode } = useThemeSettings();
  const isDark = mode === 'dark';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
      }}
    >
      <Box
        component="span"
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--ink-text)',
          opacity: 0.55,
        }}
      >
        mode
      </Box>
      <Box
        onClick={toggleMode}
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle dark mode"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMode();
          }
        }}
        sx={{
          position: 'relative',
          width: 52,
          height: 26,
          border: '1.5px solid var(--ink-text)',
          borderRadius: 0,
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          '&:hover': {
            transform: 'rotate(-1deg)',
            borderColor: 'var(--ink-primary)',
          },
        }}
      >
        <motion.div
          animate={{
            x: isDark ? 26 : 0,
            backgroundColor: isDark ? 'var(--ink-primary)' : 'var(--ink-secondary)',
          }}
          transition={{
            x: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            backgroundColor: { duration: 0.25 },
          }}
          style={{
            position: 'absolute',
            top: 2,
            left: 2,
            width: 20,
            height: 20,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            left: 4,
            top: '50%',
            transform: 'translateY(-50%)',
            color: isDark ? 'var(--ink-text)' : 'var(--paper)',
            opacity: isDark ? 0.4 : 1,
            transition: 'opacity 0.3s ease',
            display: 'flex',
          }}
        >
          <LightModeIcon sx={{ fontSize: 14 }} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: 4,
            top: '50%',
            transform: 'translateY(-50%)',
            color: isDark ? 'var(--paper)' : 'var(--ink-text)',
            opacity: isDark ? 1 : 0.4,
            transition: 'opacity 0.3s ease',
            display: 'flex',
          }}
        >
          <DarkModeIcon sx={{ fontSize: 14 }} />
        </Box>
      </Box>
    </Box>
  );
}
