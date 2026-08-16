import { Box, Typography, Container } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SectionTitle from '../components/section-title';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  useGitHubStats,
  GITHUB_PROFILE_URL,
  type GitHubRepo,
} from '../hooks/useGitHubStats';

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F1E05A',
  Python: '#3572A5',
  Java: '#B07219',
  Go: '#00ADD8',
  Rust: '#DEA584',
  'C++': '#F34B7D',
  C: '#555555',
  'C#': '#178600',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  HTML: '#E34C26',
  CSS: '#563D7C',
  SCSS: '#C6538C',
  Shell: '#89E051',
  Lua: '#000080',
  Elixir: '#6E4A7E',
  Scala: '#C22D40',
  Haskell: '#5E5086',
  'Objective-C': '#438EFF',
  PowerShell: '#012456',
  Vue: '#41B883',
  Svelte: '#FF3E00',
};

function colorFor(lang: string): string {
  return LANGUAGE_COLORS[lang] ?? '#71717A';
}

function formatRelative(iso: string): string {
  const then = new Date(iso).getTime();
  const diff = Date.now() - then;
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  const years = Math.floor(months / 12);
  return `${years}y ago`;
}

function StatTile({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Box
      ref={ref}
      sx={{
        p: 3,
        border: '1px solid var(--border)',
        borderRadius: 2,
        backgroundColor: 'var(--paper)',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        opacity: 0,
        transform: 'translateY(8px)',
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.08}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.08}s, border-color 0.2s ease`,
        '&:hover': {
          borderColor: 'var(--ink-primary)',
        },
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
    >
      <Typography
        sx={{
          fontFamily: 'var(--font-sans)',
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 600,
          color: 'var(--ink-text)',
          letterSpacing: '-0.025em',
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--ink-mute)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

function LanguageDonut({
  languages,
  totalRepos,
}: {
  languages: Array<{ name: string; count: number }>;
  totalRepos: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const size = 168;
  const strokeWidth = 22;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  const top = languages.slice(0, 6);
  const segments = top.reduce<
    Array<{ name: string; count: number; dashLength: number; offset: number }>
  >((acc, lang) => {
    const last = acc[acc.length - 1];
    const offset = last ? last.offset + last.dashLength : 0;
    const dashLength = (lang.count / totalRepos) * circumference;
    return [...acc, { name: lang.name, count: lang.count, dashLength, offset }];
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        flexWrap: 'wrap',
        opacity: 0,
        transform: 'translateY(8px)',
        transition:
          'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
    >
      <Box sx={{ position: 'relative', flexShrink: 0 }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{ transform: 'rotate(-90deg)' }}
          aria-hidden="true"
        >
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="var(--border)"
            strokeWidth={strokeWidth}
          />
          {segments.map((seg) => (
            <circle
              key={seg.name}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={colorFor(seg.name)}
              strokeWidth={strokeWidth}
              strokeDasharray={`${seg.dashLength} ${circumference - seg.dashLength}`}
              strokeDashoffset={-seg.offset}
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease',
                transitionDelay: '0.2s',
              }}
            />
          ))}
        </svg>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.75rem',
              fontWeight: 600,
              color: 'var(--ink-text)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            {totalRepos}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--ink-mute)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              mt: 0.5,
            }}
          >
            repos
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 160 }}>
        {top.map((lang) => {
          const pct = Math.round((lang.count / totalRepos) * 100);
          return (
            <Box
              key={lang.name}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                fontSize: '0.85rem',
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: colorFor(lang.name),
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'var(--ink-text)',
                  flex: 1,
                }}
              >
                {lang.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--ink-mute)',
                }}
              >
                {pct}%
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function RepoStarsChart({
  repos,
}: {
  repos: GitHubRepo[];
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const top = repos.slice(0, 5);
  const maxStars = Math.max(1, ...top.map((r) => r.stargazers_count));

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        opacity: 0,
        transform: 'translateY(8px)',
        transition:
          'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
    >
      {top.map((repo, i) => {
        const pct = (repo.stargazers_count / maxStars) * 100;
        return (
          <Box
            key={repo.full_name}
            component="a"
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'block',
              textDecoration: 'none',
              color: 'var(--ink-text)',
              transition: 'all 0.2s ease',
              '&:hover': {
                '& .repo-bar-name': {
                  color: 'var(--ink-primary)',
                },
                '& .repo-bar-fill': {
                  filter: 'brightness(1.1)',
                },
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                mb: 0.5,
                gap: 1,
              }}
            >
              <Typography
                className="repo-bar-name"
                sx={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: 'var(--ink-text)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s ease',
                }}
              >
                {repo.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--ink-soft)',
                  }}
                >
                  {repo.stargazers_count}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--ink-mute)',
                  }}
                >
                  ★
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: 6,
                backgroundColor: 'var(--paper-2)',
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              <Box
                className="repo-bar-fill"
                sx={{
                  width: `${pct}%`,
                  height: '100%',
                  backgroundColor: 'var(--ink-primary)',
                  borderRadius: 3,
                  transition:
                    'width 0.8s cubic-bezier(0.22, 1, 0.36, 1), filter 0.2s ease',
                  transitionDelay: `${i * 0.08}s`,
                }}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

function ActivityChart({ repos }: { repos: GitHubRepo[] }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const yearCounts = new Map<string, number>();
  for (const repo of repos) {
    if (repo.fork || repo.archived) continue;
    const year = new Date(repo.created_at).getFullYear().toString();
    yearCounts.set(year, (yearCounts.get(year) ?? 0) + 1);
  }

  const years = Array.from(yearCounts.keys()).sort();
  const counts = years.map((y) => yearCounts.get(y) ?? 0);
  const maxCount = Math.max(1, ...counts);
  const totalRepos = counts.reduce((a, b) => a + b, 0);

  if (years.length === 0) {
    return (
      <Box
        sx={{
          height: 140,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--ink-mute)',
          }}
        >
          No activity data
        </Typography>
      </Box>
    );
  }

  const chartHeight = 110;
  const barWidth = years.length > 10 ? 18 : 32;
  const gap = years.length > 10 ? 8 : 14;

  return (
    <Box
      ref={ref}
      sx={{
        opacity: 0,
        transform: 'translateY(8px)',
        transition:
          'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          mb: 2,
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: 'var(--ink-text)',
            letterSpacing: '-0.01em',
          }}
        >
          {totalRepos} repos created
        </Typography>
        <Typography
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--ink-mute)',
            letterSpacing: '0.05em',
          }}
        >
          {years[0]} — {years[years.length - 1]}
        </Typography>
      </Box>

      <Box sx={{ overflowX: 'auto', pb: 1 }}>
        <Box sx={{ display: 'inline-flex', alignItems: 'flex-end', gap: `${gap}px`, height: chartHeight, minWidth: '100%' }}>
          {years.map((year, i) => {
            const count = counts[i];
            const heightPx = (count / maxCount) * (chartHeight - 24);
            return (
              <Box
                key={year}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 0.5,
                  width: barWidth,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--ink-mute)',
                  }}
                >
                  {count}
                </Typography>
                <Box
                  sx={{
                    width: barWidth,
                    height: heightPx,
                    backgroundColor: 'var(--ink-primary)',
                    borderRadius: '3px 3px 0 0',
                    transition:
                      'height 0.7s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.2s ease',
                    transitionDelay: `${i * 0.05}s`,
                    '&:hover': {
                      filter: 'brightness(1.1)',
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--ink-soft)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {year.slice(2)}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

function ChartCard({
  title,
  children,
  isVisible,
}: {
  title: string;
  children: React.ReactNode;
  isVisible?: boolean;
}) {
  return (
    <Box
      sx={{
        p: { xs: 3, md: 4 },
        border: '1px solid var(--border)',
        borderRadius: 2,
        backgroundColor: 'var(--paper)',
        opacity: 0,
        transform: 'translateY(8px)',
        transition:
          'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.2s ease',
        '&:hover': {
          borderColor: 'var(--border-strong)',
        },
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
    >
      <Typography
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--ink-mute)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          mb: 3,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function Skeleton({ height = 32 }: { height?: number }) {
  return (
    <Box
      sx={{
        height,
        backgroundColor: 'var(--paper-2)',
        borderRadius: 1,
        animation: 'pulse 1.5s ease-in-out infinite',
        '@keyframes pulse': {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.7 },
        },
      }}
    />
  );
}

export function GitHubStats() {
  const { data, loading, error, isStale } = useGitHubStats();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const showFallback = error && !data;

  const stats = data
    ? [
        { value: String(data.profile.public_repos), label: 'Public repos' },
        { value: String(data.totals.stars), label: 'Total stars' },
        { value: String(data.totals.forks), label: 'Total forks' },
        { value: String(data.profile.followers), label: 'Followers' },
      ]
    : [
        { value: '—', label: 'Public repos' },
        { value: '—', label: 'Total stars' },
        { value: '—', label: 'Total forks' },
        { value: '—', label: 'Followers' },
      ];

  const topRepos = data
    ? [...data.repos].sort((a, b) => b.stargazers_count - a.stargazers_count)
    : [];

  const originalRepos = data?.repos ?? [];

  return (
    <Box
      id="github"
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 14 },
        bgcolor: 'var(--paper)',
        borderTop: '1px solid var(--border)',
        scrollMarginTop: { xs: 64, sm: 0 },
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          text="GitHub stats"
          eyebrow="05 — GitHub"
          subtitle="Live data from my GitHub profile: repositories, languages, and activity."
        />

        {isStale && data && (
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--ink-mute)',
                letterSpacing: '0.05em',
              }}
            >
              ↻ showing cached data · live refresh failed
            </Typography>
          </Box>
        )}

        {/* Stats row */}
        <Box
          ref={ref}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 2,
            mb: 4,
          }}
        >
          {showFallback
            ? [0, 1, 2, 3].map((i) => (
                <Box
                  key={i}
                  sx={{
                    p: 3,
                    border: '1px solid var(--border)',
                    borderRadius: 2,
                  }}
                >
                  <Skeleton height={36} />
                  <Box sx={{ mt: 1.5 }}>
                    <Skeleton height={12} />
                  </Box>
                </Box>
              ))
            : stats.map((stat, i) => (
                <StatTile
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  index={i}
                />
              ))}
        </Box>

        {/* Charts grid */}
        {data && (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
              mb: 4,
            }}
          >
            <ChartCard title="Languages" isVisible={isVisible}>
              {data.languages.length > 0 ? (
                <LanguageDonut
                  languages={data.languages}
                  totalRepos={originalRepos.length}
                />
              ) : (
                <Box sx={{ py: 4, textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--ink-mute)',
                    }}
                  >
                    No language data
                  </Typography>
                </Box>
              )}
            </ChartCard>

            <ChartCard title="Top repositories by stars" isVisible={isVisible}>
              {topRepos.length > 0 ? (
                <RepoStarsChart repos={topRepos} />
              ) : (
                <Box sx={{ py: 4, textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--ink-mute)',
                    }}
                  >
                    No repositories
                  </Typography>
                </Box>
              )}
            </ChartCard>
          </Box>
        )}

        {/* Activity chart */}
        {data && (
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                border: '1px solid var(--border)',
                borderRadius: 2,
                backgroundColor: 'var(--paper)',
              }}
            >
              <ActivityChart repos={originalRepos} />
            </Box>
          </Box>
        )}

        {/* Skeletons for charts when loading */}
        {loading && !data && (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
              mb: 4,
            }}
          >
            {[0, 1].map((i) => (
              <Box
                key={i}
                sx={{
                  p: 4,
                  border: '1px solid var(--border)',
                  borderRadius: 2,
                }}
              >
                <Skeleton height={12} />
                <Box sx={{ mt: 3 }}>
                  <Skeleton height={140} />
                </Box>
              </Box>
            ))}
          </Box>
        )}

        {/* View all link */}
        <Box sx={{ mt: 4 }}>
          <Box
            component="a"
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.75,
              px: 2.5,
              py: 1,
              border: '1px solid var(--border-strong)',
              borderRadius: 1,
              color: 'var(--ink-text)',
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 500,
              transition: 'all 0.2s ease',
              '&:hover': {
                borderColor: 'var(--ink-primary)',
                color: 'var(--ink-primary)',
                bgcolor: 'var(--paper-2)',
              },
            }}
          >
            View full profile on GitHub
            <OpenInNewIcon sx={{ fontSize: 14 }} />
          </Box>
        </Box>

        {/* Fallback error */}
        {showFallback && (
          <Box
            sx={{
              mt: 4,
              p: 3,
              border: '1px solid var(--border)',
              borderRadius: 2,
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                color: 'var(--ink-soft)',
              }}
            >
              Unable to load GitHub stats right now.{' '}
              <Box
                component="a"
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'var(--ink-primary)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--ink-primary)',
                }}
              >
                View profile directly →
              </Box>
            </Typography>
          </Box>
        )}

        {/* Last updated */}
        {data && (
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--ink-mute)',
                letterSpacing: '0.05em',
              }}
            >
              Last updated {formatRelative(new Date(data.fetchedAt).toISOString())}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}