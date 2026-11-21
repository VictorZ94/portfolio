import * as React from 'react';
import { LanguageContext } from './useLanguage';
import { detectLocale } from '../i18n/detectLocale';
import { STORAGE_LOCALE } from '../i18n/locales';
import type { Locale } from '../i18n/locales';
import { en } from '../i18n/messages/en';
import { es } from '../i18n/messages/es';

const MESSAGES = { en, es };

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(detectLocale);
  const t = MESSAGES[locale];

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_LOCALE, next);
    } catch {
      /* localStorage unavailable */
    }
  };

  React.useEffect(() => {
    document.documentElement.lang = locale;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
  }, [locale, t]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
  );
}
