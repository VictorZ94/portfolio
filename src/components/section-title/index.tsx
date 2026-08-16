import { Box, Typography } from '@mui/material';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionTitleProps {
  text: string;
  eyebrow?: string;
  subtitle?: string;
}

const SectionTitle = ({ text, eyebrow, subtitle }: SectionTitleProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        mb: 6,
        opacity: 0,
        transform: 'translateY(12px)',
        transition:
          'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
    >
      {eyebrow && (
        <Typography
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--ink-mute)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        component="h2"
        sx={{
          fontFamily: 'var(--font-sans)',
          fontSize: { xs: '2rem', md: '2.75rem' },
          fontWeight: 600,
          color: 'var(--ink-text)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
        }}
      >
        {text}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            color: 'var(--ink-soft)',
            maxWidth: 640,
            lineHeight: 1.55,
            mt: 0.5,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;