export type ThemeMode = 'light' | 'dark';
export type InkKey = 'pink' | 'vermillion' | 'sunflower' | 'aqua' | 'forest';

export interface InkOption {
  key: InkKey;
  label: string;
  light: string;
  dark: string;
}

export const INK_OPTIONS: InkOption[] = [
  { key: 'pink',       label: 'Pink',       light: '#FF48B0', dark: '#FF6BC1' },
  { key: 'vermillion', label: 'Vermillion', light: '#E85D2F', dark: '#FF7A4A' },
  { key: 'sunflower',  label: 'Sunflower',  light: '#E8B500', dark: '#FFD60A' },
  { key: 'aqua',       label: 'Aqua',       light: '#00A99D', dark: '#4DD4C8' },
  { key: 'forest',     label: 'Forest',     light: '#2A6B3A', dark: '#5FB070' },
];
