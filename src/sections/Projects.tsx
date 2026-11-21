import { Box, Typography } from '@mui/material';
import { Section } from '../components/Section';
import { Screenshot } from '../components/Screenshot';
import { ExternalLinks, StatusBadge } from '../components/ProjectMeta';
import { PROJECTS } from '../data/projects';
import { projectHref } from '../router';
import { GITHUB_PROFILE_URL, useGitHubStats } from '../hooks/useGitHubStats';
import type { GitHubRepo } from '../hooks/useGitHubStats';
import { displaySx, linkSx, metaSx } from '../styles';
import { useLanguage } from '../context/useLanguage';

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
  const { t } = useLanguage();
  const { data, loading, error } = useGitHubStats();

  if (loading) {
    return <Typography sx={metaSx}>{t.projects.loading}</Typography>;
  }

  if (error || !data || data.repos.length === 0) {
    return (
      <Typography sx={metaSx}>
        {t.projects.noResponse}{' '}
        <Box component="a" href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" sx={linkSx}>
          {t.projects.seeOnGitHub}
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
              <span aria-label={t.projects.stars(repo.stargazers_count)}>★ {repo.stargazers_count}</span>
            )}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export function Projects() {
  const { locale, t } = useLanguage();

  return (
    <Section id="projects" title={t.projects.title}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          columnGap: 5,
          rowGap: 7,
          mb: { xs: 7, md: 9 },
        }}
      >
        {PROJECTS.map((project) => (
          <Box component="article" key={project.slug} aria-labelledby={`${project.slug}-title`}>
            <Box
              component="a"
              href={projectHref(project.slug)}
              aria-hidden
              tabIndex={-1}
              sx={{
                display: 'block',
                textDecoration: 'none',
                transition: 'transform 0.4s var(--ease)',
                '&:hover': { transform: 'translateY(-4px)' },
              }}
            >
              <Screenshot shot={project.cover} host={project.host} showCaption={false} ratio="16 / 10" />
            </Box>
            <Box sx={{ mt: 2.5 }}>
              <StatusBadge status={project.status} />
            </Box>
            <Typography
              component="h3"
              id={`${project.slug}-title`}
              sx={{ ...displaySx(), fontSize: { xs: '1.75rem', md: '2rem' }, lineHeight: 1.05, mt: 0.5 }}
            >
              {project.name}
            </Typography>
            <Typography sx={{ mt: 1, maxWidth: '44ch' }}>{project.tagline[locale]}</Typography>
            <Typography sx={{ ...metaSx, mt: 1.5 }}>{project.stack.slice(0, 5).join(' · ')}</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 2 }}>
              <Box component="a" href={projectHref(project.slug)} sx={{ ...linkSx, fontWeight: 600 }}>
                {t.projects.caseStudy} →
              </Box>
              <ExternalLinks links={project.links} />
            </Box>
          </Box>
        ))}
      </Box>

      <Typography component="h3" sx={{ fontSize: '1.05rem', fontWeight: 600, mb: 1.5 }}>
        {t.projects.onGitHub}
      </Typography>
      <RepoList />
    </Section>
  );
}
