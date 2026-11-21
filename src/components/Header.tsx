import { Box, ButtonBase } from '@mui/material';
import { useThemeSettings } from '../context/useThemeSettings';
import { THEMES } from '../context/themes';
import { linkSx, metaSx, settleIn } from '../styles';
import { useLanguage } from '../context/useLanguage';
import { LOCALES } from '../i18n/locales';

const NAV = [
  { key: 'work', href: '#work' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
] as const;

function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <Box
      role="group"
      aria-label={t.language.group}
      sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
    >
      {LOCALES.map((option, i) => {
        const active = option.key === locale;
        return (
          <Box key={option.key} sx={{ display: 'contents' }}>
            {i > 0 && (
              <Box component="span" aria-hidden sx={{ ...metaSx, opacity: 0.5 }}>
                /
              </Box>
            )}
            <ButtonBase
              onClick={() => setLocale(option.key)}
              aria-label={option.label}
              aria-pressed={active}
              lang={option.key}
              title={option.label}
              sx={{
                ...metaSx,
                px: 0.5,
                py: 0.25,
                borderRadius: 1,
                fontWeight: active ? 600 : 400,
                color: active ? 'var(--text)' : 'var(--soft)',
                transition: 'color 0.2s ease',
                '&:hover': { color: 'var(--accent)' },
              }}
            >
              {option.short}
            </ButtonBase>
          </Box>
        );
      })}
    </Box>
  );
}

function ThemePicker() {
  const { mode, setMode } = useThemeSettings();
  const { t } = useLanguage();

  return (
    <Box role="group" aria-label={t.theme.group} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box component="span" sx={{ ...metaSx, display: { xs: 'none', md: 'inline' }, mr: 0.5 }}>
        {t.theme.label}
      </Box>
      {THEMES.map((theme) => {
        const active = theme.key === mode;
        return (
          <ButtonBase
            key={theme.key}
            onClick={() => setMode(theme.key)}
            aria-label={t.theme.use(theme.label)}
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
  );
}

export function Header() {
  const { t } = useLanguage();

  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        columnGap: 2,
        rowGap: 1.5,
        py: 3,
        ...settleIn(1.1),
      }}
    >
      <Box component="nav" aria-label={t.nav.label} sx={{ display: 'flex', gap: { xs: 2, sm: 3 } }}>
        {NAV.map((item) => (
          <Box key={item.href} component="a" href={item.href} sx={linkSx}>
            {t.nav[item.key]}
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 3 } }}>
        <LanguageToggle />
        <ThemePicker />
      </Box>
    </Box>
  );
}
