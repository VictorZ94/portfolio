import { Box, Typography, Container, Button } from '@mui/material';
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
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'var(--paper)',
        overflow: 'hidden',
        scrollMarginTop: { xs: 64, sm: 0 },
      }}
    >
      {/* Single subtle radial */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-15%',
          width: '60%',
          height: '80%',
          background:
            'radial-gradient(ellipse 60% 50% at center, var(--ink-primary-soft) 0%, transparent 70%)',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', py: { xs: 10, md: 0 } }}>
        {/* Status pill */}
        <Box
          sx={{
            mb: 4,
            opacity: 0,
            transform: 'translateY(8px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            ...(isVisible && {
              opacity: 1,
              transform: 'translateY(0)',
            }),
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.75,
              border: '1px solid var(--border)',
              borderRadius: 20,
              px: 1.5,
              py: 0.5,
              backgroundColor: 'var(--paper)',
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: 'var(--ink-primary)',
              }}
            />
            <Typography
              sx={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--ink-soft)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Open to opportunities
            </Typography>
          </Box>
        </Box>

        {/* Headline */}
        <Typography
          component="h1"
          sx={{
            fontFamily: 'var(--font-sans)',
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            fontWeight: 600,
            color: 'var(--ink-text)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            mb: 3,
            maxWidth: 900,
            opacity: 0,
            transform: 'translateY(12px)',
            transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
            ...(isVisible && {
              opacity: 1,
              transform: 'translateY(0)',
            }),
          }}
        >
          Senior Full-Stack Engineer building production systems with{' '}
          <Box
            component="span"
            sx={{ color: 'var(--ink-primary)' }}
          >
            React
          </Box>
          {', '}
          <Box
            component="span"
            sx={{ color: 'var(--ink-text)' }}
          >
            Next.js
          </Box>
          {', and '}
          <Box
            component="span"
            sx={{ color: 'var(--ink-text)' }}
          >
            TypeScript
          </Box>
          .
        </Typography>

        {/* Subhead */}
        <Typography
          sx={{
            fontFamily: 'var(--font-sans)',
            fontSize: { xs: '1.05rem', md: '1.2rem' },
            color: 'var(--ink-soft)',
            maxWidth: 640,
            mb: 5,
            lineHeight: 1.6,
            opacity: 0,
            transform: 'translateY(12px)',
            transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
            ...(isVisible && {
              opacity: 1,
              transform: 'translateY(0)',
            }),
          }}
        >
          I design, build, and ship scalable web applications end-to-end.
          Focused on clean architecture, performance, and shipping real
          impact in production environments.
        </Typography>

        {/* CTAs */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
            alignItems: 'center',
            mb: 6,
            opacity: 0,
            transform: 'translateY(12px)',
            transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s',
            ...(isVisible && {
              opacity: 1,
              transform: 'translateY(0)',
            }),
          }}
        >
          <Button
            variant="contained"
            onClick={() => scrollTo('projects')}
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: 'var(--ink-primary)',
              color: 'var(--ink-primary-fg)',
              px: 3,
              py: 1.25,
              fontSize: '0.875rem',
              fontWeight: 500,
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'var(--ink-primary)',
                filter: 'brightness(0.95)',
              },
            }}
          >
            View selected work
          </Button>
          <Button
            variant="outlined"
            onClick={() => scrollTo('contact')}
            sx={{
              borderColor: 'var(--border-strong)',
              color: 'var(--ink-text)',
              px: 3,
              py: 1.25,
              fontSize: '0.875rem',
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
            Get in touch
          </Button>
        </Box>

        {/* Quick stats — credibility signals */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 3, md: 6 },
            pt: 5,
            borderTop: '1px solid var(--border)',
            opacity: 0,
            transform: 'translateY(12px)',
            transition: 'opacity 0.7s ease 0.65s, transform 0.7s ease 0.65s',
            ...(isVisible && {
              opacity: 1,
              transform: 'translateY(0)',
            }),
          }}
        >
          {[
            { value: '6+', label: 'Years building production apps' },
            { value: '50+', label: 'Features shipped to production' },
            { value: '100k+', label: 'Users served across products' },
          ].map((stat) => (
            <Box key={stat.label}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: 'var(--ink-text)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  mb: 0.5,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--ink-mute)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}