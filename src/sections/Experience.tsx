import { Box, Typography, Container, Stack } from '@mui/material';
import SectionTitle from '../components/section-title';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Job {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

const jobs: Job[] = [
  {
    company: 'Tech Company Inc.',
    role: 'Senior Full-Stack Engineer',
    period: '2022 — present',
    achievements: [
      'Led architecture redesign of core platform, improving performance by 40%',
      'Mentored team of 3 junior engineers and established coding standards',
      'Reduced deployment time from 2 hours to 15 minutes through CI/CD optimization',
    ],
  },
  {
    company: 'Digital Solutions Co.',
    role: 'Full-Stack Developer',
    period: '2020 — 2022',
    achievements: [
      'Built and maintained multiple production React applications serving 100k+ users',
      'Implemented real-time features using WebSockets and GraphQL subscriptions',
      'Improved test coverage from 45% to 85% through strategic testing initiatives',
    ],
  },
  {
    company: 'StartUp Labs',
    role: 'Junior Developer',
    period: '2018 — 2020',
    achievements: [
      'Developed responsive web applications using React and Node.js',
      'Contributed to database optimization resulting in 30% query performance improvement',
      'Participated in agile development cycles and daily standups',
    ],
  },
];

function Stamp({ text, rotate }: { text: string; rotate: number }) {
  return (
    <Box
      sx={{
        display: 'inline-block',
        border: '2px solid var(--ink-primary)',
        px: 1.5,
        py: 0.5,
        transform: `rotate(${rotate}deg)`,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: `rotate(${rotate}deg) scale(1.05)`,
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: 'var(--font-stamp)',
          fontSize: '0.85rem',
          color: 'var(--ink-primary)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

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
  const rotation = index % 2 === 0 ? -2 : 2;

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: { xs: '60px 1fr', md: '120px 60px 1fr' },
        gap: { xs: 2, md: 4 },
        pb: isLast ? 0 : { xs: 6, md: 8 },
        opacity: 0,
        transform: 'translateY(24px)',
        transition: `opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.15}s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.15}s`,
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
    >
      {/* Period (left column) */}
      <Box>
        <Typography
          sx={{
            fontFamily: 'var(--font-stamp)',
            fontSize: '0.95rem',
            color: 'var(--ink-primary)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            transform: `rotate(${rotation}deg)`,
            display: 'inline-block',
            transformOrigin: 'left center',
          }}
        >
          {job.period}
        </Typography>
      </Box>

      {/* Center dot */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {!isLast && (
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              bottom: -32,
              width: 2,
              borderLeft: '2px dashed var(--ink-text-mute)',
            }}
          />
        )}
        <Box
          sx={{
            position: 'relative',
            width: 18,
            height: 18,
            borderRadius: '50%',
            backgroundColor: 'var(--paper)',
            border: '3px solid var(--ink-primary)',
            mt: 0.5,
            transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            ...(isVisible && {
              backgroundColor: 'var(--ink-primary)',
            }),
            '&:hover': {
              transform: 'scale(1.3) rotate(45deg)',
            },
          }}
        />
      </Box>

      {/* Content */}
      <Box>
        <Box sx={{ mb: 2 }}>
          <Stamp text={job.role} rotate={rotation} />
        </Box>
        <Typography
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--ink-text-mute)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            mb: 2,
          }}
        >
          @ {job.company}
        </Typography>
        <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
          {job.achievements.map((achievement) => (
            <Box
              key={achievement}
              component="li"
              sx={{
                position: 'relative',
                pl: 3,
                mb: 1.2,
                fontSize: '0.9rem',
                color: 'var(--ink-text-soft)',
                lineHeight: 1.65,
                fontFamily: 'var(--font-mono)',
                '&::before': {
                  content: '"→"',
                  position: 'absolute',
                  left: 0,
                  color: 'var(--ink-primary)',
                  fontFamily: 'var(--font-stamp)',
                  fontWeight: 700,
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
        py: { xs: 10, md: 16 },
        bgcolor: 'var(--paper-deep)',
        scrollMarginTop: { xs: 64, sm: 0 },
        backgroundImage:
          'radial-gradient(circle, rgba(31,58,138,0.05) 1px, transparent 1.5px)',
        backgroundSize: '24px 24px',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <SectionTitle
            text="Experience"
            index="— page 03 —"
            subtitle="the road so far"
          />
        </Box>
        <Stack spacing={0}>
          {jobs.map((job, i) => (
            <TimelineEntry
              key={job.company}
              job={job}
              index={i}
              isLast={i === jobs.length - 1}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
