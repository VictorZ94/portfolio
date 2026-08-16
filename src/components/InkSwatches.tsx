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
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--ink-mute)',
          display: 'block',
          mb: 0.75,
        }}
      >
        ink
      </Box>
      <Box sx={{ display: 'flex', gap: 0.5 }}>
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
                  width: 18,
                  height: 18,
                  p: 0,
                  border: active
                    ? '1.5px solid var(--ink-text)'
                    : '1.5px solid var(--border-strong)',
                  borderRadius: '50%',
                  outline: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'border-color 0.2s ease',
                  '&:hover': {
                    borderColor: 'var(--ink-text)',
                  },
                  '&:focus-visible': {
                    borderColor: 'var(--ink-primary)',
                  },
                }}
              >
                <motion.span
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: active ? opt.light : opt.dark,
                  }}
                  animate={{
                    scale: active ? 1 : 0.55,
                  }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </Box>
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );
}