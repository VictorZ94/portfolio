import type { SxProps, Theme } from '@mui/material';

/** Text link: hairline underline that takes the accent color on hover. */
export const linkSx: SxProps<Theme> = {
  color: 'var(--text)',
  textDecoration: 'underline',
  textDecorationThickness: '1px',
  textUnderlineOffset: '0.25em',
  textDecorationColor: 'var(--line)',
  transition: 'color 0.2s ease, text-decoration-color 0.2s ease',
  '&:hover': {
    color: 'var(--accent)',
    textDecorationColor: 'var(--accent)',
  },
};

/** Secondary metadata: dates, stacks, languages. */
export const metaSx: SxProps<Theme> = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  color: 'var(--soft)',
};

/** Display face for headings, at a moderate width. */
export const displaySx = (stretch = '110%', weight = 600): SxProps<Theme> => ({
  fontFamily: 'var(--font-display)',
  fontStretch: stretch,
  fontWeight: weight,
});

/** Delayed fade so the page settles in after the hero name develops. */
export const settleIn = (delay: number): SxProps<Theme> => ({
  opacity: 0,
  animation: `fade-in 0.8s var(--ease) ${delay}s forwards`,
});
