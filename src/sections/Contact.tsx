import { Box } from '@mui/material';
import { Section } from '../components/Section';
import { Footer } from '../components/Footer';
import { linkSx } from '../styles';

const EMAIL = 'zrvictor00@gmail.com';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/victorz94' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
] as const;

export function Contact() {
  return (
    <>
      <Section id="contact" title="Contact">
        <Box
          component="a"
          href={`mailto:${EMAIL}`}
          sx={{
            ...linkSx,
            display: 'inline-block',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 4.5vw, 2.6rem)',
            fontWeight: 600,
            fontStretch: '105%',
            lineHeight: 1.1,
            overflowWrap: 'anywhere',
          }}
        >
          {EMAIL}
        </Box>
        <Box sx={{ display: 'flex', gap: 3, mt: 4 }}>
          {LINKS.map((link) => (
            <Box
              key={link.label}
              component="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={linkSx}
            >
              {link.label}
            </Box>
          ))}
        </Box>
      </Section>

      <Footer />
    </>
  );
}
