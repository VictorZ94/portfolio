import { Box, Typography } from '@mui/material';
import { metaSx } from '../styles';
import { useLanguage } from '../context/useLanguage';

export function Footer() {
  const { t } = useLanguage();
  return (
    <Box component="footer" sx={{ py: 4, borderTop: '1px solid var(--line)' }}>
      <Typography sx={metaSx}>{t.footer}</Typography>
    </Box>
  );
}
