import * as React from 'react';
import { ThemeContext } from './useThemeSettings';
import { DEFAULT_THEME, THEMES } from './themes';
import type { ThemeMode } from './themes';

const STORAGE_MODE = 'vz:theme';

function getInitialMode(): ThemeMode {
  try {
    const stored = window.localStorage.getItem(STORAGE_MODE);
    const match = THEMES.find((t) => t.key === stored);
    if (match) return match.key;
  } catch {
    /* localStorage unavailable */
  }
  return DEFAULT_THEME;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = React.useState<ThemeMode>(getInitialMode);

  const setMode = (next: ThemeMode) => {
    setModeState(next);
    try {
      window.localStorage.setItem(STORAGE_MODE, next);
    } catch {
      /* localStorage unavailable */
    }
  };

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    const bg = THEMES.find((t) => t.key === mode)?.bg;
    if (bg) {
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg);
    }
  }, [mode]);

  return <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>;
}
