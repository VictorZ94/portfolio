import * as React from 'react';
import { INK_OPTIONS } from './themeTokens';
import type { InkKey, ThemeMode } from './themeTokens';
import { ThemeContext } from './useThemeSettings';

const STORAGE_MODE = 'vz:theme';
const STORAGE_INK = 'vz:ink';

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_MODE);
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

function getInitialInk(): InkKey {
  if (typeof window === 'undefined') return 'pink';
  const stored = window.localStorage.getItem(STORAGE_INK);
  if (INK_OPTIONS.some((opt) => opt.key === stored)) return stored as InkKey;
  return 'pink';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = React.useState<ThemeMode>(getInitialMode);
  const [ink, setInkState] = React.useState<InkKey>(getInitialInk);

  const setMode = React.useCallback((next: ThemeMode) => {
    setModeState(next);
    try {
      window.localStorage.setItem(STORAGE_MODE, next);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const setInk = React.useCallback((next: InkKey) => {
    setInkState(next);
    try {
      window.localStorage.setItem(STORAGE_INK, next);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const toggleMode = React.useCallback(() => {
    setMode(mode === 'light' ? 'dark' : 'light');
  }, [mode, setMode]);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    document.documentElement.setAttribute('data-ink', ink);
  }, [mode, ink]);

  const value = React.useMemo(
    () => ({ mode, ink, setMode, setInk, toggleMode }),
    [mode, ink, setMode, setInk, toggleMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
