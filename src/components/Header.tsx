import { Box, ButtonBase } from '@mui/material';
import { useThemeSettings } from '../context/useThemeSettings';
import { THEMES } from '../context/themes';
import { linkSx, metaSx, settleIn } from '../styles';

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

export function Header() {
  const { mode, setMode } = useThemeSettings();

  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        py: 3,
        ...settleIn(1.1),
      }}
    >
      <Box component="nav" aria-label="Sections" sx={{ display: 'flex', gap: { xs: 2, sm: 3 } }}>
        {NAV.map((item) => (
          <Box key={item.href} component="a" href={item.href} sx={linkSx}>
            {item.label}
          </Box>
        ))}
      </Box>

      <Box
        role="group"
        aria-label="Color theme"
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <Box component="span" sx={{ ...metaSx, display: { xs: 'none', sm: 'inline' }, mr: 0.5 }}>
          Theme
        </Box>
        {THEMES.map((theme) => {
          const active = theme.key === mode;
          return (
            <ButtonBase
              key={theme.key}
              onClick={() => setMode(theme.key)}
              aria-label={`Use ${theme.label} colors`}
              aria-pressed={active}
              title={theme.label}
              sx={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                backgroundColor: theme.bg,
                border: '1px solid var(--line)',
                boxShadow: active ? '0 0 0 2px var(--bg), 0 0 0 4px var(--text)' : 'none',
                transition: 'box-shadow 0.25s var(--ease)',
                '&::after': {
                  content: '""',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: theme.accent,
                },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}
