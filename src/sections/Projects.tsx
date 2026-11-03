import { Box, Typography } from '@mui/material';
import { Section } from '../components/Section';
import { GITHUB_PROFILE_URL, useGitHubStats } from '../hooks/useGitHubStats';
import type { GitHubRepo } from '../hooks/useGitHubStats';
import { linkSx, metaSx } from '../styles';

const FEATURED = {
  title: 'E-commerce platform',
  summary: 'Moved a storefront that buckled under sales traffic to an event-driven order pipeline.',
  outcomes: ['99.7% fewer checkout errors at peak', 'Order processing from 2 hours to 5 minutes'],
  stack: 'Next.js, Node.js, PostgreSQL, Redis, Stripe',
};

const REPO_LIMIT = 4;

function pickRepos(repos: GitHubRepo[]): GitHubRepo[] {
  return [...repos]
    .sort(
      (a, b) =>
        b.stargazers_count - a.stargazers_count ||
        Date.parse(b.updated_at) - Date.parse(a.updated_at),
    )
    .slice(0, REPO_LIMIT);
}

function RepoList() {
  const { data, loading, error } = useGitHubStats();

  if (loading) {
    return <Typography sx={metaSx}>Loading repositories…</Typography>;
  }

  if (error || !data || data.repos.length === 0) {
    return (
      <Typography sx={metaSx}>
        GitHub didn’t respond.{' '}
        <Box component="a" href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" sx={linkSx}>
          See the repositories on GitHub
        </Box>
      </Typography>
    );
  }

  return (
    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
      {pickRepos(data.repos).map((repo) => (
        <Box
          component="li"
          key={repo.id}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr auto' },
            columnGap: 3,
            py: 2,
            borderTop: '1px solid var(--line)',
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Box
              component="a"
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ...linkSx, fontSize: '1.15rem', fontWeight: 600, overflowWrap: 'anywhere' }}
            >
              {repo.name}
            </Box>
            {repo.description && (
              <Typography sx={{ color: 'var(--soft)', mt: 0.25, maxWidth: '60ch' }}>
                {repo.description}
              </Typography>
            )}
          </Box>
          <Typography sx={{ ...metaSx, display: 'flex', gap: 2, justifyContent: { sm: 'flex-end' } }}>
            {repo.language && <span>{repo.language}</span>}
            {repo.stargazers_count > 0 && (
              <span aria-label={`${repo.stargazers_count} stars`}>★ {repo.stargazers_count}</span>
            )}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <Box component="article" sx={{ mb: { xs: 7, md: 9 } }}>
        <Typography
          component="h3"
          sx={{
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontStretch: '110%',
            lineHeight: 1.05,
          }}
        >
          {FEATURED.title}
        </Typography>
        <Typography sx={{ mt: 1.5, fontSize: '1.15rem', maxWidth: '46ch' }}>
          {FEATURED.summary}
        </Typography>
        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            p: 0,
            m: 0,
            mt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1.5, sm: 5 },
          }}
        >
          {FEATURED.outcomes.map((outcome) => (
            <Box
              component="li"
              key={outcome}
              sx={{ pl: 2, borderLeft: '3px solid var(--accent)', maxWidth: '24ch', lineHeight: 1.35 }}
            >
              {outcome}
            </Box>
          ))}
        </Box>
        <Typography sx={{ ...metaSx, mt: 3 }}>{FEATURED.stack}</Typography>
      </Box>

      <Typography component="h3" sx={{ fontSize: '1.05rem', fontWeight: 600, mb: 1.5 }}>
        On GitHub
      </Typography>
      <RepoList />
    </Section>
  );
}
