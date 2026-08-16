import { Box, Typography } from '@mui/material';

interface AvatarProps {
  size?: number;
}

export function Avatar({ size = 96 }: AvatarProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
      }}
    >
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: 'var(--paper-2)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
          transition: 'border-color 0.25s ease',
          '&:hover': {
            borderColor: 'var(--ink-primary)',
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: size * 0.11,
            color: 'var(--ink-mute)',
            textAlign: 'center',
            px: 1,
            lineHeight: 1.2,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          photo
          <br />
          here
        </Typography>
      </Box>
    </Box>
  );
}