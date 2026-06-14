export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
}

export const orangeColorScheme: ColorScheme = {
  primary: '#E07A3F',
  secondary: '#D46B2E',
  accent: '#6B9B9F',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  text: '#222222',
  textSecondary: '#666666',
};

export const getColorScheme = (variant: 'orange' | 'blue' | 'green' = 'orange'): ColorScheme => {
  const schemes: Record<string, ColorScheme> = {
    orange: orangeColorScheme,
    blue: {
      primary: '#1565C0',
      secondary: '#0D47A1',
      accent: '#00838F',
      background: '#F5F5F5',
      surface: '#FFFFFF',
      text: '#222222',
      textSecondary: '#666666',
    },
    green: {
      primary: '#388E3C',
      secondary: '#2E7D32',
      accent: '#004D40',
      background: '#F5F5F5',
      surface: '#FFFFFF',
      text: '#222222',
      textSecondary: '#666666',
    },
  };

  return schemes[variant] || orangeColorScheme;
};
