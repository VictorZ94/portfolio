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
        gridTemplateColumns: { xs: '1fr', md: '200px 1fr' },
        gap: { xs: 1.5, md: 8 },
        pb: isLast ? 0 : { xs: 6, md: 10 },
        opacity: 0,
        transform: 'translateY(8px)',
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`,
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
    >
      {/* Left: period + company */}
      <Box>
        <Typography
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--ink-mute)',
            letterSpacing: '0.05em',
            mb: 1,
          }}
        >
          {job.period}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            color: 'var(--ink-soft)',
            fontWeight: 500,
          }}
        >
          {job.company}
        </Typography>
      </Box>

      {/* Right: role + achievements */}
      <Box
        sx={{
          position: 'relative',
          pl: { md: 4 },
          borderLeft: { md: '1px solid var(--border)' },
          '&::before': {
            content: '""',
            position: 'absolute',
            left: -4,
            top: 8,
            width: 7,
            height: 7,
            borderRadius: '50%',
            backgroundColor: 'var(--paper)',
            border: '1.5px solid var(--ink-primary)',
            display: { xs: 'none', md: 'block' },
          },
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.15rem',
            fontWeight: 600,
            color: 'var(--ink-text)',
            mb: 2,
            letterSpacing: '-0.01em',
          }}
        >
          {job.role}
        </Typography>
        <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
          {job.achievements.map((achievement) => (
            <Box
              key={achievement}
              component="li"
              sx={{
                position: 'relative',
                pl: 3,
                mb: 1.5,
                fontSize: '0.92rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.65,
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
        py: { xs: 10, md: 14 },
        bgcolor: 'var(--paper)',
        borderTop: '1px solid var(--border)',
        scrollMarginTop: { xs: 64, sm: 0 },
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          text="Experience"
          eyebrow="02 — Experience"
          subtitle="Senior IC with 6+ years shipping production systems across frontend and backend."
        />

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