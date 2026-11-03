import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { displaySx } from '../styles';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={`${id}-title`}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '220px 1fr' },
        gap: { xs: 3, md: 6 },
        py: { xs: 7, md: 10 },
        borderTop: '1px solid var(--line)',
        scrollMarginTop: 24,
      }}
    >
      <Typography
        component="h2"
        id={`${id}-title`}
        sx={{ ...displaySx(), fontSize: '1.4rem', lineHeight: 1.2 }}
      >
        {title}
      </Typography>
      <Box sx={{ minWidth: 0 }}>{children}</Box>
    </Box>
  );
}
