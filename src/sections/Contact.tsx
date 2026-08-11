import { Box, Typography, Container, Button, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SectionTitle from '../components/section-title';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { HandDrawnArrow } from '../components/HandDrawnArrow';

interface ContactLink {
  icon: typeof EmailIcon;
  label: string;
  href: string;
}

const contactLinks: ContactLink[] = [
  {
    icon: EmailIcon,
    label: 'Email',
    href: 'mailto:zrvictor00@gmail.com',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    href: 'https://github.com/victorz94',
  },
];

export function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Box
      id="contact"
      component="section"
      ref={ref}
      sx={{
        position: 'relative',
        py: { xs: 12, md: 18 },
        bgcolor: 'var(--paper-deep)',
        overflow: 'hidden',
        scrollMarginTop: { xs: 64, sm: 0 },
      }}
    >
      {/* Halftone bleed */}
      <Box
        sx={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '60%',
          height: '90%',
          background:
            'radial-gradient(ellipse 60% 50% at center, var(--ink-primary) 0%, transparent 60%)',
          opacity: 0.2,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '50%',
          height: '70%',
          background:
            'radial-gradient(ellipse 60% 50% at center, var(--ink-secondary) 0%, transparent 60%)',
          opacity: 0.15,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <SectionTitle
            text="Say hi"
            index="— page 06 — the end?"
            subtitle="let's build something"
            ink="primary"
          />
        </Box>

        <Box
          sx={{
            textAlign: 'center',
            opacity: 0,
            transform: 'translateY(20px)',
            transition:
              'opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s, transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
            ...(isVisible && {
              opacity: 1,
              transform: 'translateY(0)',
            }),
          }}
        >
          <Typography
            sx={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3.5rem' },
              color: 'var(--ink-text)',
              lineHeight: 1.05,
              mb: 3,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
            }}
          >
            Open to{' '}
            <Box component="span" sx={{ color: 'var(--ink-primary)' }}>
              opportunities
            </Box>{' '}
            &{' '}
            <Box component="span" sx={{ color: 'var(--ink-secondary)' }}>
              collabs.
            </Box>
          </Typography>

          <Box
            sx={{
              position: 'relative',
              display: 'inline-block',
              mb: 6,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-hand)',
                fontSize: { xs: '1.5rem', md: '1.9rem' },
                color: 'var(--ink-text-soft)',
                transform: 'rotate(-2deg)',
              }}
            >
              don't be a stranger —
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                right: -50,
                bottom: -10,
              }}
            >
              <HandDrawnArrow
                width={60}
                height={36}
                color="var(--ink-primary)"
                rotation={15}
                delay={1.5}
              />
            </Box>
          </Box>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2.5}
            sx={{ justifyContent: 'center', alignItems: 'center', mb: 6 }}
          >
            {contactLinks.map(({ icon: Icon, label, href }, i) => (
              <Box
                key={label}
                sx={{
                  opacity: 0,
                  transform: 'translateY(16px) rotate(-2deg)',
                  transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${0.5 + i * 0.12}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${0.5 + i * 0.12}s`,
                  ...(isVisible && {
                    opacity: 1,
                    transform: 'translateY(0) rotate(0deg)',
                  }),
                }}
              >
                <Button
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  startIcon={<Icon />}
                  variant={i === 0 ? 'contained' : 'outlined'}
                  sx={
                    i === 0
                      ? {
                          bgcolor: 'var(--ink-primary)',
                          color: 'var(--paper)',
                          px: 3.5,
                          py: 1.5,
                          borderRadius: 0,
                          fontSize: '0.85rem',
                          border: '2px solid var(--ink-primary)',
                          boxShadow: '4px 4px 0 var(--ink-text)',
                          '&:hover': {
                            bgcolor: 'var(--paper)',
                            color: 'var(--ink-primary)',
                            transform: 'translate(2px, 2px)',
                            boxShadow: '2px 2px 0 var(--ink-text)',
                          },
                        }
                      : {
                          borderColor: 'var(--ink-text)',
                          color: 'var(--ink-text)',
                          px: 3.5,
                          py: 1.5,
                          borderRadius: 0,
                          borderWidth: '2px',
                          fontSize: '0.85rem',
                          boxShadow: '4px 4px 0 var(--ink-secondary)',
                          '&:hover': {
                            borderColor: 'var(--ink-secondary)',
                            color: 'var(--ink-secondary)',
                            bgcolor: 'transparent',
                            borderWidth: '2px',
                            transform: 'translate(2px, 2px)',
                            boxShadow: '2px 2px 0 var(--ink-secondary)',
                          },
                        }
                  }
                >
                  {label}
                </Button>
              </Box>
            ))}
          </Stack>

          {/* Hand-signed footer */}
          <Box
            sx={{
              mt: 6,
              pt: 4,
              borderTop: '2px dashed var(--ink-text-mute)',
              display: 'inline-block',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.5rem',
                color: 'var(--ink-text-soft)',
                transform: 'rotate(-3deg)',
              }}
            >
              — victor z.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
