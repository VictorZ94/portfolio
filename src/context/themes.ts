export type ThemeMode = 'mist' | 'sand' | 'slate' | 'forest';

export interface ThemeOption {
  key: ThemeMode;
  label: string;
  /** Background color, used for the picker swatch and the browser theme-color. */
  bg: string;
  /** Accent color, shown as the inner dot of the swatch. */
  accent: string;
}

export const THEMES: ThemeOption[] = [
  { key: 'mist', label: 'Mist', bg: '#EEF1F5', accent: '#3B5B8C' },
  { key: 'sand', label: 'Sand', bg: '#F3EEE6', accent: '#8A5A2B' },
  { key: 'slate', label: 'Slate', bg: '#1F2630', accent: '#8FB0D9' },
  { key: 'forest', label: 'Forest', bg: '#1E2622', accent: '#8FBF9F' },
];

export const DEFAULT_THEME: ThemeMode = 'mist';
