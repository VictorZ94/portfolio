import { Box } from '@mui/material';
import type { Project } from '../data/projects';
import { linkSx, metaSx } from '../styles';

export function StatusBadge({ status }: { status: Project['status'] }) {
  return (
    <Box
      component="span"
      sx={{
        ...metaSx,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
        fontSize: '0.8rem',
        '&::before': {
          content: '""',
          width: 7,
          height: 7,
          borderRadius: '50%',
          backgroundColor: status === 'Live' ? 'var(--accent)' : 'transparent',
          border: '1.5px solid var(--accent)',
        },
      }}
    >
      {status}
    </Box>
  );
}

export function ExternalLinks({ links }: { links: Project['links'] }) {
  if (links.length === 0) return null;
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      {links.map((link) => (
        <Box
          key={link.href}
          component="a"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={linkSx}
        >
          {link.label} ↗
        </Box>
      ))}
    </Box>
  );
}
