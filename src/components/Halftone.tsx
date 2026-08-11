import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import type { ReactNode } from 'react';

interface HalftoneProps {
  color?: string;
  density?: number;
  size?: number;
  opacity?: number;
  blend?: 'multiply' | 'screen' | 'normal';
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

export function Halftone({
  color = 'var(--ink-primary)',
  density = 0.5,
  size = 8,
  opacity,
  blend = 'multiply',
  sx,
  children,
}: HalftoneProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        isolation: 'isolate',
        ...sx,
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle, ${color} ${size * 0.18}px, transparent ${size * 0.25}px)`,
          backgroundSize: `${size}px ${size}px`,
          opacity: opacity ?? density,
          mixBlendMode: blend,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
      {children}
    </Box>
  );
}
