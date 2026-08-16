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
        py: { xs: 10, md: 14 },
        bgcolor: 'var(--paper)',
        borderTop: '1px solid var(--border)',
        scrollMarginTop: { xs: 64, sm: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Box ref={ref}>
          <SectionTitle
            text="About"
            eyebrow="01 — About"
            subtitle="Senior engineer with deep frontend expertise and full-stack range."
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' },
              gap: { xs: 5, md: 10 },
              mt: 2,
            }}
          >
            {/* Left: main statement */}
            <Box>
              <Box
                sx={{
                  opacity: 0,
                  transform: 'translateY(8px)',
                  transition:
                    'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
                  ...(isVisible && {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }),
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: { xs: '1.35rem', md: '1.65rem' },
                    color: 'var(--ink-text)',
                    lineHeight: 1.4,
                    mb: 3,
                    fontWeight: 500,
                    letterSpacing: '-0.015em',
                  }}
                >
                  I lead frontend architecture on production web products,
                  taking ownership from system design through to deployment
                  and observability.
                </Typography>
              </Box>

              <Box
                sx={{
                  opacity: 0,
                  transform: 'translateY(8px)',
                  transition:
                    'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.3s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.3s',
                  ...(isVisible && {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }),
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  I've shipped real-world products at scale — leading
                  architecture migrations, designing systems that handle
                  production traffic, and mentoring engineers. My work spans
                  the full stack: from frontend interfaces and design
                  systems, through API design and authentication, to the
                  deployment and observability layers underneath.
                </Typography>
              </Box>

              {/* Skills matrix */}
              <Box
                sx={{
                  mt: 5,
                  pt: 4,
                  borderTop: '1px solid var(--border)',
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: 3,
                  opacity: 0,
                  transform: 'translateY(8px)',
                  transition:
                    'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.45s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.45s',
                  ...(isVisible && {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }),
                }}
              >
                {[
                  { label: 'Languages', value: 'JavaScript, TypeScript, Python' },
                  { label: 'Frameworks', value: 'React, Next.js, Node.js, Nest.js' },
                  { label: 'Backend', value: 'FastAPI, Django, GraphQL, REST' },
                  { label: 'Infrastructure', value: 'AWS, GCP, Docker, Vercel, CI/CD' },
                ].map((row) => (
                  <Box key={row.label}>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--ink-mute)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        mb: 0.75,
                      }}
                    >
                      {row.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        color: 'var(--ink-text)',
                        lineHeight: 1.55,
                      }}
                    >
                      {row.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Right: pull-quote */}
            <Box
              sx={{
                position: { md: 'sticky' },
                top: { md: 100 },
                opacity: 0,
                transform: 'translateY(8px)',
                transition:
                  'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.4s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.4s',
                ...(isVisible && {
                  opacity: 1,
                  transform: 'translateY(0)',
                }),
              }}
            >
              <Box
                sx={{
                  borderTop: '1px solid var(--border-strong)',
                  borderBottom: '1px solid var(--border-strong)',
                  py: 4,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: { xs: '1.6rem', md: '1.9rem' },
                    color: 'var(--ink-text)',
                    lineHeight: 1.35,
                    mb: 2,
                  }}
                >
                  "Where the eye stops, the design begins."
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--ink-mute)',
                    letterSpacing: '0.05em',
                  }}
                >
                  — design principle
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}