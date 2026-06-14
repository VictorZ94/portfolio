import { Box, Typography, Container, Paper, Stack } from '@mui/material';
import { useTheme } from '../theme';

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
    period: '2022 - Present',
    achievements: [
      'Led architecture redesign of core platform, improving performance by 40%',
      'Mentored team of 3 junior engineers and established coding standards',
      'Reduced deployment time from 2 hours to 15 minutes through CI/CD optimization',
    ],
  },
  {
    company: 'Digital Solutions Co.',
    role: 'Full-Stack Developer',
    period: '2020 - 2022',
    achievements: [
      'Built and maintained multiple production React applications serving 100k+ users',
      'Implemented real-time features using WebSockets and GraphQL subscriptions',
      'Improved test coverage from 45% to 85% through strategic testing initiatives',
    ],
  },
  {
    company: 'StartUp Labs',
    role: 'Junior Developer',
    period: '2018 - 2020',
    achievements: [
      'Developed responsive web applications using React and Node.js',
      'Contributed to database optimization resulting in 30% query performance improvement',
      'Participated in agile development cycles and daily standups',
    ],
  },
];

export function Experience() {
  const { colorScheme } = useTheme();

  return (
    <Box id="experience" component="section" sx={{ mb: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            fontWeight: 700,
            textTransform: 'uppercase',
            color: colorScheme.primary,
            mb: 3,
            letterSpacing: '0.05em',
          }}
        >
          Experience
        </Typography>
        <Stack spacing={3}>
          {jobs.map((job, index) => (
            <Paper
              key={index}
              sx={{
                p: { xs: 3, md: 4 },
                bgcolor: colorScheme.surface,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                borderRadius: '8px',
                borderLeft: `4px solid ${colorScheme.primary}`,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, gap: 2 }}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: colorScheme.text,
                    }}
                  >
                    {job.role}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.95rem',
                      color: colorScheme.textSecondary,
                    }}
                  >
                    {job.company}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    color: colorScheme.textSecondary,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {job.period}
                </Typography>
              </Box>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {job.achievements.map((achievement, idx) => (
                  <Typography
                    key={idx}
                    component="li"
                    sx={{
                      fontSize: '0.95rem',
                      color: colorScheme.text,
                      mb: 1,
                      '&:last-child': { mb: 0 },
                    }}
                  >
                    {achievement}
                  </Typography>
                ))}
              </Box>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
