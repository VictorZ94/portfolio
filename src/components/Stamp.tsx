import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { motion } from 'motion/react';

interface StampProps {
  text: string;
  color?: string;
  borderColor?: string;
  shape?: 'circle' | 'rectangle';
  size?: number;
  rotation?: number;
  filled?: boolean;
  sx?: SxProps<Theme>;
}

export function Stamp({
  text,
  color = 'var(--ink-primary)',
  borderColor,
  shape = 'rectangle',
  size = 18,
  rotation = -4,
  filled = false,
  sx,
}: StampProps) {
  const border = borderColor ?? color;

  return (
    <motion.span
      initial={{ opacity: 0, scale: 1.6, rotate: rotation - 8 }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ display: 'inline-block', transformOrigin: 'center' }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: shape === 'circle' ? size * 4 : 'auto',
          height: shape === 'circle' ? size * 4 : 'auto',
          px: shape === 'rectangle' ? 1.5 : 0,
          py: shape === 'rectangle' ? 0.6 : 0,
          border: `2px solid ${border}`,
          borderRadius: shape === 'circle' ? '50%' : 0,
          backgroundColor: filled ? color : 'transparent',
          color: filled ? 'var(--paper)' : color,
          ...sx,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-stamp)',
            fontSize: `${size}px`,
            lineHeight: 1,
            letterSpacing: '0.05em',
            textTransform: shape === 'rectangle' ? 'uppercase' : 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {text}
        </Typography>
      </Box>
    </motion.span>
  );
}
