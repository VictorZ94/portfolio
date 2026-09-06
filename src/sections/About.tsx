import { Box, Typography, Container } from '@mui/material';
import SectionTitle from '../components/section-title';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        bgcolor: 'var(--paper)',
        borderTop: '1px solid var(--border)',
        scrollMarginTop: { xs: 64, sm: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Box ref={ref}>
          <SectionTitle text="About" band />

          <Typography
            sx={{
              fontFamily: 'var(--font-sans)',
              fontSize: { xs: '1.1rem', md: '1.35rem' },
              color: 'var(--ink-text)',
              lineHeight: 1.55,
              maxWidth: 720,
              letterSpacing: '-0.01em',
              fontWeight: 400,
              opacity: 0,
              transform: 'translateY(8px)',
              transition:
                'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
              ...(isVisible && {
                opacity: 1,
                transform: 'translateY(0)',
              }),
            }}
          >
            Building production systems end-to-end — frontend, backend,
            infrastructure. I care about clean architecture, fast feedback
            loops, and shipping work that lasts.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
