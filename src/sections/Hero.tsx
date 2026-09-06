import { Box, Typography, Container, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Hero() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="hero"
      component="section"
      ref={ref}
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '78vh' },
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'var(--paper)',
        overflow: 'hidden',
        scrollMarginTop: { xs: 64, sm: 0 },
        pt: { xs: 12, md: 0 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-15%',
          width: '55%',
          height: '90%',
          background:
            'radial-gradient(ellipse 60% 50% at center, var(--ink-primary-soft) 0%, transparent 70%)',
          opacity: 0.55,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          sx={{
            opacity: 0,
            transform: 'translateY(8px)',
            transition:
              'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
            ...(isVisible && {
              opacity: 1,
              transform: 'translateY(0)',
            }),
          }}
        >
          <Box
            sx={{
              width: { xs: 36, md: 48 },
              height: 3,
              backgroundColor: 'var(--ink-primary)',
              mb: 3,
              borderRadius: 2,
            }}
          />
        </Box>

        <Typography
          component="h1"
          sx={{
            fontFamily: 'var(--font-sans)',
            fontSize: { xs: '2.75rem', sm: '3.75rem', md: '5rem' },
            fontWeight: 600,
            color: 'var(--ink-text)',
            lineHeight: 1.02,
            letterSpacing: '-0.035em',
            mb: 2,
            maxWidth: 1000,
            opacity: 0,
            transform: 'translateY(12px)',
            transition:
              'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
            ...(isVisible && {
              opacity: 1,
              transform: 'translateY(0)',
            }),
          }}
        >
          Victor Zuluaga.
        </Typography>

        <Typography
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: { xs: '0.85rem', md: '0.95rem' },
            color: 'var(--ink-soft)',
            maxWidth: 640,
            mb: 5,
            lineHeight: 1.5,
            letterSpacing: '-0.005em',
            opacity: 0,
            transform: 'translateY(12px)',
            transition:
              'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
            ...(isVisible && {
              opacity: 1,
              transform: 'translateY(0)',
            }),
          }}
        >
          Engineer. Builder. Shipping.
        </Typography>

        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            opacity: 0,
            transform: 'translateY(12px)',
            transition:
              'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s',
            ...(isVisible && {
              opacity: 1,
              transform: 'translateY(0)',
            }),
          }}
        >
          <Button
            variant="contained"
            onClick={() => scrollTo('projects')}
            endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
            sx={{
              bgcolor: 'var(--ink-primary)',
              color: 'var(--ink-primary-fg)',
              px: 2.5,
              py: 1,
              fontSize: '0.8rem',
              fontWeight: 500,
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'var(--ink-primary)',
                filter: 'brightness(0.95)',
              },
            }}
          >
            Work
          </Button>
          <Button
            variant="outlined"
            onClick={() => scrollTo('contact')}
            sx={{
              borderColor: 'var(--border-strong)',
              color: 'var(--ink-text)',
              px: 2.5,
              py: 1,
              fontSize: '0.8rem',
              fontWeight: 500,
              borderRadius: 1,
              borderWidth: '1px',
              '&:hover': {
                borderColor: 'var(--ink-text)',
                bgcolor: 'var(--paper-2)',
                borderWidth: '1px',
              },
            }}
          >
            Contact
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
