import { Box, Typography } from '@mui/material';
import { metaSx } from '../styles';

export function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, borderTop: '1px solid var(--line)' }}>
      <Typography sx={metaSx}>© 2026 Victor Zuluaga</Typography>
    </Box>
  );
}
