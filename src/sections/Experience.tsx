import { Box, Typography, Container } from '@mui/material';
import SectionTitle from '../components/section-title';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Job {
  company: string;
  role: string;
  period: string;
  location?: string;
  achievements: string[];
}

const jobs: Job[] = [
  {
    company: 'Tech Company Inc.',
    role: 'Senior Full-Stack Engineer',
    period: '2022 — Present',
    achievements: [
      'Led frontend architecture redesign of core platform, reducing page load time by 40% and improving Core Web Vitals across 12 product surfaces.',
      'Migrated 200k-LOC legacy billing system from cron-based jobs to event-driven architecture, cutting processing time from 2 hours to under 5 minutes and eliminating race conditions.',
      'Established frontend coding standards and design system used by a team of 5 engineers; reduced PR review time by 35%.',
    ],
  },
  {
    company: 'Digital Solutions Co.',
    role: 'Full-Stack Developer',
    period: '2020 — 2022',
    achievements: [
      'Built and maintained 4 production React applications serving 100k+ monthly active users, including a real-time analytics dashboard.',
      'Designed and shipped a GraphQL API gateway that consolidated 7 legacy REST endpoints, reducing client-side request volume by 60%.',
      'Drove test coverage from 45% to 85% across the product surface by introducing React Testing Library, integration tests, and CI gates.',
    ],
  },
  {
    company: 'StartUp Labs',
    role: 'Junior Developer',
    period: '2018 — 2020',
    achievements: [
      'Shipped 6 customer-facing features across the React + Node.js stack in a fast-paced agile environment.',
      'Optimized Postgres query patterns for the user search feature, reducing p95 query time from 800ms to 180ms.',
    ],
  },
];

function TimelineEntry({
  job,
  index,
  isLast,
}: {
  job: Job;
  index: number;
  isLast: boolean;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '140px 1fr' },
        gap: { xs: 0.5, md: 6 },
        pb: isLast ? 0 : { xs: 4, md: 6 },
        opacity: 0,
        transform: 'translateY(8px)',
        transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.08}s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.08}s`,
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--ink-mute)',
            letterSpacing: '0.05em',
            mb: 0.5,
          }}
        >
          {job.period}
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'relative',
          pl: { md: 3 },
          borderLeft: { md: '1px solid var(--border)' },
          '&::before': {
            content: '""',
            position: 'absolute',
            left: -3,
            top: 8,
            width: 5,
            height: 5,
            borderRadius: '50%',
            backgroundColor: 'var(--ink-primary)',
            display: { xs: 'none', md: 'block' },
          },
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            fontWeight: 600,
            color: 'var(--ink-text)',
            mb: 0.25,
            letterSpacing: '-0.01em',
          }}
        >
          {job.role}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            color: 'var(--ink-soft)',
            mb: 1.5,
          }}
        >
          {job.company}
        </Typography>
        <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
          {job.achievements.map((achievement) => (
            <Box
              key={achievement}
              component="li"
              sx={{
                position: 'relative',
                pl: 2.5,
                mb: 0.75,
                fontSize: '0.85rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.55,
                fontFamily: 'var(--font-sans)',
                '&::before': {
                  content: '"–"',
                  position: 'absolute',
                  left: 0,
                  color: 'var(--ink-mute)',
                },
                '&:last-child': { mb: 0 },
              }}
            >
              {achievement}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export function Experience() {
  return (
    <Box
      id="experience"
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        bgcolor: 'var(--paper)',
        borderTop: '1px solid var(--border)',
        scrollMarginTop: { xs: 64, sm: 0 },
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle text="Experience" band />

        <Box>
          {jobs.map((job, i) => (
            <TimelineEntry
              key={job.company}
              job={job}
              index={i}
              isLast={i === jobs.length - 1}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}