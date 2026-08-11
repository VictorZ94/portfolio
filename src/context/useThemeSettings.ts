import * as React from 'react';
import type { InkKey, ThemeMode } from './themeTokens';

interface ThemeContextValue {
  mode: ThemeMode;
  ink: InkKey;
  setMode: (mode: ThemeMode) => void;
  setInk: (ink: InkKey) => void;
  toggleMode: () => void;
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

export function useThemeSettings(): ThemeContextValue {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useThemeSettings must be used within ThemeProvider');
  }
  return ctx;
}

export { ThemeContext };
export type { ThemeContextValue };
