import { Box, Typography } from '@mui/material';

interface AvatarProps {
  size?: number;
}

export function Avatar({ size = 120 }: AvatarProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
        mx: 'auto',
        transform: 'rotate(-2deg)',
      }}
    >
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: 'var(--paper-deep)',
          border: '2px solid var(--ink-text)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '4px 4px 0 var(--ink-secondary)',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
            opacity: 0.45,
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-stamp)',
            fontSize: size * 0.13,
            color: 'var(--ink-text-mute)',
            textAlign: 'center',
            px: 1,
            lineHeight: 1.1,
            position: 'relative',
            zIndex: 1,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          photo
          <br />
          here
        </Typography>
      </Box>
      {/* "Stamped" approval mark */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -size * 0.12,
          right: -size * 0.12,
          width: size * 0.4,
          height: size * 0.4,
          border: '2px solid var(--ink-primary)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--paper)',
          transform: 'rotate(12deg)',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-stamp)',
            fontSize: size * 0.06,
            color: 'var(--ink-primary)',
            textAlign: 'center',
            lineHeight: 1,
            letterSpacing: '0.05em',
          }}
        >
          HI!
        </Typography>
      </Box>
    </Box>
  );
}
