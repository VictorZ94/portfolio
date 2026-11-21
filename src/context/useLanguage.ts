import * as React from 'react';
import type { Locale } from '../i18n/locales';
import type { Messages } from '../i18n/messages/en';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
}

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

export function useLanguage(): LanguageContextValue {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}

export { LanguageContext };
export type { LanguageContextValue };
