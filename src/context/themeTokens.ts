export type ThemeMode = 'light' | 'dark';
export type InkKey = 'lime' | 'orange' | 'cyan' | 'crimson' | 'violet';

export interface InkOption {
  key: InkKey;
  label: string;
  light: string;
  dark: string;
}

export const INK_OPTIONS: InkOption[] = [
  { key: 'lime',    label: 'Lime',    light: '#A3E635', dark: '#BEF264' },
  { key: 'orange',  label: 'Orange',  light: '#F97316', dark: '#FB923C' },
  { key: 'cyan',    label: 'Cyan',    light: '#06B6D4', dark: '#22D3EE' },
  { key: 'crimson', label: 'Crimson', light: '#EF4444', dark: '#F87171' },
  { key: 'violet',  label: 'Violet',  light: '#A855F7', dark: '#C084FC' },
];