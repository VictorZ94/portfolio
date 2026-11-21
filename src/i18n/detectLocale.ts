import { DEFAULT_LOCALE, STORAGE_LOCALE, isLocale } from './locales';
import type { Locale } from './locales';

/*
 * Picks the visitor's language before the first render, so the page never
 * flashes the wrong one. Priority: ?lang= param, saved choice, then location
 * signals (browser language and device time zone), then English.
 *
 * The time zone stands in for location: no network call, nothing leaves the
 * browser. To use IP geolocation instead, replace `prefersSpanish`.
 */

/** Time zones of Spanish-speaking countries (America/Argentina/* is matched by prefix). */
const SPANISH_TIME_ZONES = new Set([
  'America/Bogota',
  'America/Mexico_City',
  'America/Cancun',
  'America/Merida',
  'America/Monterrey',
  'America/Chihuahua',
  'America/Hermosillo',
  'America/Mazatlan',
  'America/Tijuana',
  'America/Lima',
  'America/Santiago',
  'America/Punta_Arenas',
  'America/Caracas',
  'America/Guayaquil',
  'America/Montevideo',
  'America/Asuncion',
  'America/La_Paz',
  'America/Panama',
  'America/Costa_Rica',
  'America/Guatemala',
  'America/El_Salvador',
  'America/Tegucigalpa',
  'America/Managua',
  'America/Santo_Domingo',
  'America/Havana',
  'America/Puerto_Rico',
  'America/Bahia_Banderas',
  'America/Matamoros',
  'America/Ojinaga',
  // Argentina: browsers often report these legacy aliases instead of America/Argentina/*.
  'America/Buenos_Aires',
  'America/Cordoba',
  'America/Catamarca',
  'America/Jujuy',
  'America/Mendoza',
  'America/Rosario',
  'Pacific/Galapagos',
  'Pacific/Easter',
  'Europe/Madrid',
  'Atlantic/Canary',
  'Africa/Ceuta',
  'Africa/Malabo',
]);

function browserPrefersSpanish(): boolean {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const first = languages.find((lang) => /^(es|en)\b/i.test(lang));
  return first?.toLowerCase().startsWith('es') ?? false;
}

function timeZoneIsSpanish(): boolean {
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return SPANISH_TIME_ZONES.has(zone) || zone.startsWith('America/Argentina/');
  } catch {
    return false;
  }
}

const prefersSpanish = () => browserPrefersSpanish() || timeZoneIsSpanish();

export function detectLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;

  const param = new URLSearchParams(window.location.search).get('lang');
  if (isLocale(param)) return param;

  try {
    const stored = window.localStorage.getItem(STORAGE_LOCALE);
    if (isLocale(stored)) return stored;
  } catch {
    /* localStorage unavailable */
  }

  return prefersSpanish() ? 'es' : DEFAULT_LOCALE;
}
