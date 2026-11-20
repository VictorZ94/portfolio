import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Section } from '../components/Section';
import { Screenshot } from '../components/Screenshot';
import { Footer } from '../components/Footer';
import { ExternalLinks, StatusBadge } from '../components/ProjectMeta';
import { PROJECTS, findProject } from '../data/projects';
import { projectHref } from '../router';
import { displaySx, linkSx, metaSx } from '../styles';

const SITE_TITLE = 'Victor Zuluaga — Senior Full-Stack Engineer';

export function ProjectPage({ slug }: { slug: string }) {
  const project = findProject(slug);

  React.useEffect(() => {
    document.title = project ? `${project.name} — Victor Zuluaga` : SITE_TITLE;
    return () => {
      document.title = SITE_TITLE;
    };
  }, [project]);

  if (!project) {
    return (
      <Box component="main" sx={{ py: 12 }}>
        <Typography sx={{ ...displaySx(), fontSize: '2rem' }}>Project not found</Typography>
        <Box component="a" href="#projects" sx={{ ...linkSx, display: 'inline-block', mt: 2 }}>
          ← All projects
        </Box>
      </Box>
    );
  }

  const index = PROJECTS.indexOf(project);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <>
      <Box component="main">
        <Box component="article" aria-labelledby="project-title">
          <Box sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 6, md: 8 } }}>
            <Box component="a" href="#projects" sx={{ ...linkSx, fontSize: '0.9rem', color: 'var(--soft)' }}>
              ← All projects
            </Box>

            <Box sx={{ mt: { xs: 5, md: 8 } }}>
              <StatusBadge status={project.status} />
              <Typography
                component="h1"
                id="project-title"
                sx={{
                  ...displaySx('115%', 650),
                  fontSize: 'clamp(2.75rem, 9vw, 6rem)',
                  lineHeight: 0.95,
                  ml: '-0.03em',
                  mt: 1.5,
                }}
              >
                {project.name}
              </Typography>
              <Typography
                sx={{
                  ...displaySx('105%', 500),
                  fontSize: { xs: '1.25rem', md: '1.6rem' },
                  lineHeight: 1.3,
                  mt: { xs: 2, md: 3 },
                  maxWidth: '32ch',
                }}
              >
                {project.tagline}
              </Typography>
              <Typography sx={{ color: 'var(--soft)', fontSize: '1.1rem', mt: 2, maxWidth: '58ch' }}>
                {project.summary}
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: 2,
                }}
              >
                <ExternalLinks links={project.links} />
                <Typography sx={metaSx}>{project.stack.join(' · ')}</Typography>
              </Box>
            </Box>

            <Box sx={{ mt: { xs: 5, md: 7 } }}>
              <Screenshot shot={project.cover} host={project.host} eager />
            </Box>
          </Box>

          <Section id="overview" title="Overview">
            {project.overview.map((paragraph) => (
              <Typography
                key={paragraph}
                sx={{ fontSize: '1.15rem', maxWidth: '62ch', '& + &': { mt: 2 } }}
              >
                {paragraph}
              </Typography>
            ))}
          </Section>

          <Section id="how-it-works" title="How it works">
            <Box
              component="ol"
              sx={{
                listStyle: 'none',
                p: 0,
                m: 0,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                columnGap: 5,
                rowGap: 4,
              }}
            >
              {project.steps.map((step, i) => (
                <Box component="li" key={step.title}>
                  <Typography
                    aria-hidden
                    sx={{ ...displaySx('120%', 600), color: 'var(--accent)', fontSize: '1.1rem' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography component="h3" sx={{ fontWeight: 600, fontSize: '1.1rem', mt: 0.5 }}>
                    {step.title}
                  </Typography>
                  <Typography sx={{ color: 'var(--soft)', mt: 0.5 }}>{step.body}</Typography>
                </Box>
              ))}
            </Box>
          </Section>

          <Section id="highlights" title="Highlights">
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                p: 0,
                m: 0,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                columnGap: 5,
                rowGap: 3.5,
              }}
            >
              {project.highlights.map((item) => (
                <Box
                  component="li"
                  key={item.title}
                  sx={{ pl: 2, borderLeft: '3px solid var(--accent)' }}
                >
                  <Typography component="h3" sx={{ fontWeight: 600, fontSize: '1.05rem' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: 'var(--soft)', mt: 0.5 }}>{item.body}</Typography>
                </Box>
              ))}
            </Box>
          </Section>

          <Section id="screens" title="Screens">
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: { xs: 4, sm: 4 },
              }}
            >
              {project.screens.map((shot) => (
                <Screenshot key={shot.file} shot={shot} host={project.host} />
              ))}
            </Box>
          </Section>
        </Box>

        {next !== project && (
          <Section id="next" title="Next project">
            <Box
              component="a"
              href={projectHref(next.slug)}
              sx={{
                ...linkSx,
                fontFamily: 'var(--font-display)',
                fontStretch: '110%',
                fontWeight: 600,
                display: 'inline-block',
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: 1.05,
              }}
            >
              {next.name} →
            </Box>
            <Typography sx={{ color: 'var(--soft)', mt: 1.5, maxWidth: '48ch' }}>
              {next.tagline}
            </Typography>
          </Section>
        )}
      </Box>
      <Footer />
    </>
  );
}
