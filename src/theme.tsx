import React, { createContext, useState, type ReactNode } from 'react';
import { getColorScheme, orangeColorScheme, type ColorScheme } from './typed';

interface ThemeContextType {
  colorScheme: ColorScheme;
  setColorVariant: (variant: 'orange' | 'blue' | 'green') => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  colorScheme: orangeColorScheme,
  setColorVariant: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(orangeColorScheme);

  const setColorVariant = (variant: 'orange' | 'blue' | 'green') => {
    setColorScheme(getColorScheme(variant));
  };

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorVariant }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function useTheme() {
  return React.useContext(ThemeContext);
}
