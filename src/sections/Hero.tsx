import { Box, Typography } from '@mui/material';
import { displaySx, linkSx, settleIn } from '../styles';

const NAME_LINES = ['Victor', 'Zuluaga'];
const LETTER_STAGGER = 0.05;

const LINKS = [
  { label: 'Email', href: 'mailto:zrvictor00@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/victorz94' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
] as const;

export function Hero() {
  let letterIndex = 0;

  return (
    <Box
      component="section"
      id="top"
      sx={{
        minHeight: { xs: '70svh', md: '68svh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        pb: { xs: 6, md: 8 },
      }}
    >
      <Typography
        component="h1"
        aria-label={NAME_LINES.join(' ')}
        sx={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 11vw, 8rem)',
          lineHeight: 0.9,
          ml: '-0.04em',
        }}
      >
        {NAME_LINES.map((line) => (
          <Box key={line} component="span" aria-hidden sx={{ display: 'block' }}>
            {line.split('').map((char) => {
              const delay = 0.15 + letterIndex++ * LETTER_STAGGER;
              return (
                <Box
                  key={`${line}-${delay}`}
                  component="span"
                  sx={{
                    display: 'inline-block',
                    fontStretch: '112%',
                    fontWeight: 650,
                    animation: `develop 1s var(--ease) ${delay}s backwards`,
                    transition: 'font-stretch 0.5s var(--ease), font-weight 0.5s var(--ease)',
                    '&:hover': { fontStretch: '120%', fontWeight: 700 },
                  }}
                >
                  {char}
                </Box>
              );
            })}
          </Box>
        ))}
      </Typography>

      <Box sx={settleIn(0.9)}>
        <Typography
          component="p"
          sx={{ ...displaySx('105%', 500), fontSize: { xs: '1.25rem', md: '1.5rem' }, mt: { xs: 2.5, md: 3 } }}
        >
          Senior Full-Stack Engineer
        </Typography>

        <Box
          sx={{
            mt: 1.5,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Typography sx={{ color: 'var(--soft)', fontSize: '1.1rem', maxWidth: '40ch' }}>
            I build web products end to end, from the database to the interface.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {LINKS.map((link) => (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                sx={linkSx}
              >
                {link.label}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
