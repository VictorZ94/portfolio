import { Box, Typography } from '@mui/material';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionTitleProps {
  text: string;
  band?: boolean;
}

const SectionTitle = ({ text, band = false }: SectionTitleProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  if (band) {
    return (
      <Box
        ref={ref}
        sx={{
          position: 'relative',
          mt: { xs: 6, md: 10 },
          mb: { xs: 3, md: 5 },
          mx: { xs: -3, md: -8 },
          px: { xs: 3, md: 8 },
          py: { xs: 1.25, md: 1.5 },
          backgroundColor: 'var(--ink-primary)',
          color: 'var(--ink-primary-fg)',
          opacity: 0,
          transform: 'translateY(8px)',
          transition:
            'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          ...(isVisible && {
            opacity: 1,
            transform: 'translateY(0)',
          }),
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: 'var(--font-sans)',
            fontSize: { xs: '0.85rem', md: '0.95rem' },
            fontWeight: 600,
            color: 'inherit',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          {text}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        mb: 4,
        opacity: 0,
        transform: 'translateY(8px)',
        transition:
          'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontFamily: 'var(--font-sans)',
          fontSize: { xs: '1.5rem', md: '1.85rem' },
          fontWeight: 600,
          color: 'var(--ink-text)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
