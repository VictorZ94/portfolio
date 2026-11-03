import * as React from 'react';
import type { ThemeMode } from './themes';

interface ThemeContextValue {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
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
