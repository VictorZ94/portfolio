import { Box, Typography, Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ContactLink {
  icon: typeof EmailIcon;
  label: string;
  value: string;
  href: string;
  primary?: boolean;
}

const contactLinks: ContactLink[] = [
  {
    icon: EmailIcon,
    label: 'Email',
    value: 'zrvictor00@gmail.com',
    href: 'mailto:zrvictor00@gmail.com',
    primary: true,
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: '/in/victor-zuluaga',
    href: 'https://linkedin.com',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: '/victorz94',
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
        py: { xs: 8, md: 12 },
        bgcolor: 'var(--paper)',
        borderTop: '1px solid var(--border)',
        overflow: 'hidden',
        scrollMarginTop: { xs: 64, sm: 0 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '-15%',
          width: '55%',
          height: '80%',
          background:
            'radial-gradient(ellipse 60% 50% at center, var(--ink-primary-soft) 0%, transparent 70%)',
          opacity: 0.45,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative' }}>
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
          <Typography
            component="h2"
            sx={{
              fontFamily: 'var(--font-sans)',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 600,
              color: 'var(--ink-text)',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              mb: 1,
            }}
          >
            Say hi.
          </Typography>
        </Box>

        <Box
          sx={{
            borderTop: '1px solid var(--border)',
            mt: 4,
            opacity: 0,
            transform: 'translateY(8px)',
            transition:
              'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.25s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.25s',
            ...(isVisible && {
              opacity: 1,
              transform: 'translateY(0)',
            }),
          }}
        >
          {contactLinks.map(({ icon: Icon, label, value, href, primary }) => (
            <Box
              key={label}
              component="a"
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '120px 1fr auto' },
                gap: { xs: 0.5, md: 3 },
                alignItems: 'center',
                py: 2,
                borderBottom: '1px solid var(--border)',
                textDecoration: 'none',
                color: 'var(--ink-text)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'var(--paper-2)',
                  px: 2,
                  mx: -2,
                  borderRadius: 1,
                  '& .contact-value': {
                    color: 'var(--ink-primary)',
                  },
                  '& .contact-arrow': {
                    transform: 'translate(2px, -2px)',
                    color: 'var(--ink-primary)',
                  },
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Icon
                  sx={{
                    fontSize: 16,
                    color: primary ? 'var(--ink-primary)' : 'var(--ink-mute)',
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--ink-text)',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {label}
                </Typography>
              </Box>
              <Typography
                className="contact-value"
                sx={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: 'var(--ink-soft)',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s ease',
                }}
              >
                {value}
              </Typography>
              <ArrowOutwardIcon
                className="contact-arrow"
                sx={{
                  fontSize: 14,
                  color: 'var(--ink-mute)',
                  transition: 'all 0.2s ease',
                  display: { xs: 'none', md: 'block' },
                }}
              />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
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
          <Typography
            sx={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--ink-mute)',
              letterSpacing: '0.05em',
            }}
          >
            © 2026
          </Typography>
          <Typography
            sx={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--ink-mute)',
              letterSpacing: '0.05em',
            }}
          >
            React · TypeScript · Vite
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
