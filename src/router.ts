import * as React from 'react';

/*
 * Minimal hash router. Project pages live at `#/projects/<slug>`; any other
 * hash (`#work`, `#projects`) is a section anchor on the home page. Hash routes
 * need no server rewrites, so deep links work on any static host.
 */

export type Route =
  | { name: 'home'; section: string | null }
  | { name: 'project'; slug: string };

const PROJECT_PREFIX = '#/projects/';

const subscribe = (onChange: () => void) => {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
};

const getHash = () => window.location.hash;
const getServerHash = () => '';

export function parseRoute(hash: string): Route {
  if (hash.startsWith(PROJECT_PREFIX)) {
    return { name: 'project', slug: decodeURIComponent(hash.slice(PROJECT_PREFIX.length)) };
  }
  return { name: 'home', section: hash.length > 1 ? hash.slice(1) : null };
}

/** The current location hash, re-rendering on change. */
export function useHash(): string {
  return React.useSyncExternalStore(subscribe, getHash, getServerHash);
}

export const projectHref = (slug: string) => `${PROJECT_PREFIX}${slug}`;
