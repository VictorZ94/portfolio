export type Locale = 'en' | 'es';

export const LOCALES: { key: Locale; short: string; label: string }[] = [
  { key: 'en', short: 'EN', label: 'English' },
  { key: 'es', short: 'ES', label: 'Español' },
];

export const DEFAULT_LOCALE: Locale = 'en';
export const STORAGE_LOCALE = 'vz:lang';

/** A value written once per locale. TypeScript requires both. */
export type Localized<T> = Record<Locale, T>;

export const pick = <T>(value: Localized<T>, locale: Locale): T => value[locale];

export const isLocale = (value: unknown): value is Locale => value === 'en' || value === 'es';
