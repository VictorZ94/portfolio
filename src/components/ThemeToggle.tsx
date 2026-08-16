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
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--ink-mute)',
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
          width: 44,
          height: 22,
          border: '1px solid var(--border-strong)',
          borderRadius: 11,
          cursor: 'pointer',
          transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
          '&:hover': {
            borderColor: 'var(--ink-primary)',
          },
        }}
      >
        <motion.div
          animate={{
            x: isDark ? 22 : 0,
          }}
          transition={{
            x: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
          }}
          style={{
            position: 'absolute',
            top: 1,
            left: 1,
            width: 18,
            height: 18,
            borderRadius: '50%',
            backgroundColor: 'var(--ink-primary)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            left: 5,
            top: '50%',
            transform: 'translateY(-50%)',
            color: isDark ? 'var(--ink-mute)' : 'var(--ink-text)',
            display: 'flex',
            transition: 'color 0.25s ease',
          }}
        >
          <LightModeIcon sx={{ fontSize: 12 }} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: 5,
            top: '50%',
            transform: 'translateY(-50%)',
            color: isDark ? 'var(--ink-text)' : 'var(--ink-mute)',
            display: 'flex',
            transition: 'color 0.25s ease',
          }}
        >
          <DarkModeIcon sx={{ fontSize: 12 }} />
        </Box>
      </Box>
    </Box>
  );
}