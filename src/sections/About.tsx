import { Box, Typography, Container } from '@mui/material';
import SectionTitle from '../components/section-title';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { HandDrawnArrow } from '../components/HandDrawnArrow';

export function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 16 },
        bgcolor: 'var(--paper)',
        scrollMarginTop: { xs: 64, sm: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Box ref={ref}>
          <Box sx={{ mb: { xs: 6, md: 10 } }}>
            <SectionTitle
              text="About"
              index="— page 02 —"
              subtitle="about the human behind the keyboard"
            />
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.5fr 1fr' },
              gap: { xs: 4, md: 8 },
              alignItems: 'start',
            }}
          >
            {/* Main text */}
            <Box>
              <Box
                sx={{
                  opacity: 0,
                  transform: 'translateY(20px) rotate(-0.5deg)',
                  transition:
                    'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
                  ...(isVisible && {
                    opacity: 1,
                    transform: 'translateY(0) rotate(0deg)',
                  }),
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    color: 'var(--ink-text)',
                    lineHeight: 1.25,
                    mb: 4,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                  }}
                >
                  I'm a Frontend Engineer specialised in React and Next.js —
                  building modern, scalable, product-focused web apps.
                </Typography>
              </Box>

              <Box
                sx={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition:
                    'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s',
                  ...(isVisible && {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }),
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                    color: 'var(--ink-text-soft)',
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  I focus on turning complex requirements and designs into
                  clear, efficient, and maintainable user interfaces, with
                  strong attention to user experience and code quality. I've
                  worked on real-world production products, taking ownership
                  of complete features — from frontend implementation to API
                  integrations and authentication flows.
                </Typography>
              </Box>

              {/* Skills list as a "legend" */}
              <Box
                sx={{
                  pt: 4,
                  borderTop: '1.5px dashed var(--ink-text-mute)',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition:
                    'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.45s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.45s',
                  ...(isVisible && {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }),
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-stamp)',
                    fontSize: '0.85rem',
                    color: 'var(--ink-primary)',
                    letterSpacing: '0.2em',
                    mb: 2.5,
                    textTransform: 'uppercase',
                  }}
                >
                  ~ legend ~
                </Typography>
                <Box sx={{ display: 'grid', gap: 1.2 }}>
                  <Typography sx={{ fontSize: '0.9rem' }}>
                    <Box
                      component="span"
                      sx={{
                        fontFamily: 'var(--font-stamp)',
                        color: 'var(--ink-secondary)',
                        fontSize: '0.75rem',
                        mr: 1.5,
                        letterSpacing: '0.1em',
                        minWidth: 70,
                        display: 'inline-block',
                      }}
                    >
                      LANG
                    </Box>
                    JavaScript, TypeScript, Python
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem' }}>
                    <Box
                      component="span"
                      sx={{
                        fontFamily: 'var(--font-stamp)',
                        color: 'var(--ink-secondary)',
                        fontSize: '0.75rem',
                        mr: 1.5,
                        letterSpacing: '0.1em',
                        minWidth: 70,
                        display: 'inline-block',
                      }}
                    >
                      FRAME
                    </Box>
                    React, Next.js, Node.js, Nest.js, Django, FastAPI
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem' }}>
                    <Box
                      component="span"
                      sx={{
                        fontFamily: 'var(--font-stamp)',
                        color: 'var(--ink-secondary)',
                        fontSize: '0.75rem',
                        mr: 1.5,
                        letterSpacing: '0.1em',
                        minWidth: 70,
                        display: 'inline-block',
                      }}
                    >
                      TOOLS
                    </Box>
                    Git, Docker, AWS, Vercel, GCP
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Pull quote — cut-and-paste feel */}
            <Box
              sx={{
                position: { md: 'sticky' },
                top: { md: 100 },
                opacity: 0,
                transform: 'translateY(20px) rotate(-3deg)',
                transition:
                  'opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s, transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s',
                ...(isVisible && {
                  opacity: 1,
                  transform: 'translateY(0) rotate(-2deg)',
                }),
              }}
            >
              <Box
                sx={{
                  border: '2px solid var(--ink-primary)',
                  p: 3,
                  bgcolor: 'var(--paper)',
                  boxShadow: '6px 6px 0 var(--ink-secondary)',
                  position: 'relative',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-stamp)',
                    fontSize: '1.1rem',
                    color: 'var(--ink-primary)',
                    mb: 1.5,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  ★ design note
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.7rem',
                    color: 'var(--ink-text)',
                    lineHeight: 1.3,
                    fontWeight: 600,
                  }}
                >
                  where the eye stops,
                  <br />
                  the design begins.
                </Typography>
                <Box sx={{ position: 'absolute', bottom: -16, right: -10 }}>
                  <HandDrawnArrow
                    width={60}
                    height={36}
                    color="var(--ink-secondary)"
                    rotation={20}
                    flip
                    delay={1.5}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
