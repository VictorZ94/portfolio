import * as React from 'react';

const GITHUB_USERNAME = 'VictorZ94';
const CACHE_KEY = 'vz:gh:stats';
const CACHE_TTL_MS = 60 * 60 * 1000;

export interface GitHubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

export interface GitHubData {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  totals: { stars: number; forks: number };
  languages: Array<{ name: string; count: number }>;
  fetchedAt: number;
}

export interface UseGitHubStatsResult {
  data: GitHubData | null;
  loading: boolean;
  error: Error | null;
  isStale: boolean;
}

interface CacheEnvelope {
  data: GitHubData;
  fetchedAt: number;
}

function readCache(): CacheEnvelope | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CacheEnvelope;
  } catch {
    return null;
  }
}

function writeCache(envelope: CacheEnvelope): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(envelope));
  } catch {
    /* localStorage unavailable */
  }
}

async function fetchAll(): Promise<GitHubData> {
  const [profileRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    ),
  ]);

  if (!profileRes.ok) {
    throw new Error(`GitHub profile fetch failed: ${profileRes.status}`);
  }
  if (!reposRes.ok) {
    throw new Error(`GitHub repos fetch failed: ${reposRes.status}`);
  }

  const profile = (await profileRes.json()) as GitHubProfile;
  const allRepos = (await reposRes.json()) as GitHubRepo[];

  const originalRepos = allRepos.filter((r) => !r.fork && !r.archived);

  let totalStars = 0;
  let totalForks = 0;
  const languageCounts = new Map<string, number>();

  for (const repo of originalRepos) {
    totalStars += repo.stargazers_count;
    totalForks += repo.forks_count;
    if (repo.language) {
      languageCounts.set(
        repo.language,
        (languageCounts.get(repo.language) ?? 0) + 1,
      );
    }
  }

  const languages = Array.from(languageCounts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return {
    profile,
    repos: originalRepos,
    totals: { stars: totalStars, forks: totalForks },
    languages,
    fetchedAt: Date.now(),
  };
}

export function useGitHubStats(): UseGitHubStatsResult {
  const [data, setData] = React.useState<GitHubData | null>(() => {
    const cache = readCache();
    return cache?.data ?? null;
  });
  const [loading, setLoading] = React.useState<boolean>(data === null);
  const [error, setError] = React.useState<Error | null>(null);
  const [isStale, setIsStale] = React.useState<boolean>(() => {
    const cache = readCache();
    if (!cache) return false;
    return Date.now() - cache.fetchedAt > CACHE_TTL_MS;
  });

  React.useEffect(() => {
    let cancelled = false;

    const run = async () => {
      try {
        const fresh = await fetchAll();
        if (cancelled) return;
        writeCache({ data: fresh, fetchedAt: fresh.fetchedAt });
        setData(fresh);
        setLoading(false);
        setError(null);
        setIsStale(false);
      } catch (err) {
        if (cancelled) return;
        const cache = readCache();
        if (cache) {
          setData(cache.data);
          setIsStale(true);
          setLoading(false);
        } else {
          setError(err instanceof Error ? err : new Error(String(err)));
          setLoading(false);
        }
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error, isStale };
}

export const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;