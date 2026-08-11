import { Box, Tooltip } from '@mui/material';
import { motion } from 'motion/react';
import { INK_OPTIONS } from '../context/themeTokens';
import { useThemeSettings } from '../context/useThemeSettings';

export function InkSwatches() {
  const { ink, setInk } = useThemeSettings();

  return (
    <Box>
      <Box
        component="span"
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--ink-text)',
          opacity: 0.55,
          display: 'block',
          mb: 0.75,
        }}
      >
        ink
      </Box>
      <Box sx={{ display: 'flex', gap: 0.75 }}>
        {INK_OPTIONS.map((opt) => {
          const active = ink === opt.key;
          return (
            <Tooltip key={opt.key} title={opt.label} arrow placement="top">
              <Box
                component="button"
                type="button"
                aria-label={`Set ink to ${opt.label}`}
                aria-pressed={active}
                onClick={() => setInk(opt.key)}
                sx={{
                  width: 22,
                  height: 22,
                  p: 0,
                  border: active
                    ? '1.5px solid var(--ink-text)'
                    : '1.5px solid transparent',
                  outline: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                  '&:hover': {
                    transform: 'scale(1.18) rotate(-6deg)',
                  },
                  '&:focus-visible': {
                    borderColor: 'var(--ink-secondary)',
                  },
                }}
              >
                <motion.span
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    backgroundColor: active ? opt.light : opt.dark,
                    mixBlendMode: 'multiply',
                  }}
                  animate={{
                    scale: active ? 1 : 0.7,
                    opacity: active ? 1 : 0.45,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </Box>
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );
}
