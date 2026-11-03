import { Box, Typography } from '@mui/material';
import { Section } from '../components/Section';
import { metaSx } from '../styles';

interface Job {
  period: string;
  role: string;
  company: string;
  /** The single result worth remembering from this role. */
  highlight: string;
}

const JOBS: Job[] = [
  {
    period: '2022 – now',
    role: 'Senior Full-Stack Engineer',
    company: 'Tech Company Inc.',
    highlight: 'Cut page load time by 40% across 12 product surfaces.',
  },
  {
    period: '2020 – 2022',
    role: 'Full-Stack Developer',
    company: 'Digital Solutions Co.',
    highlight: 'Built 4 React apps serving 100k+ monthly users.',
  },
  {
    period: '2018 – 2020',
    role: 'Junior Developer',
    company: 'StartUp Labs',
    highlight: 'Took search queries from 800 ms to 180 ms at p95.',
  },
];

const TOOLS = ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'];

export function Work() {
  return (
    <Section id="work" title="Work">
      <Box component="ol" sx={{ listStyle: 'none', p: 0, m: 0 }}>
        {JOBS.map((job) => (
          <Box
            component="li"
            key={job.company}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '130px 1fr' },
              columnGap: 4,
              rowGap: 0.5,
              pb: 5,
            }}
          >
            <Typography sx={{ ...metaSx, pt: 0.5 }}>{job.period}</Typography>
            <Box>
              <Typography component="h3" sx={{ fontSize: '1.15rem', fontWeight: 600 }}>
                {job.role}
                <Box component="span" sx={{ fontWeight: 400, color: 'var(--soft)' }}>
                  {', '}
                  {job.company}
                </Box>
              </Typography>
              <Typography sx={{ mt: 0.75, maxWidth: '52ch' }}>{job.highlight}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Typography sx={{ ...metaSx, fontSize: '1.05rem', maxWidth: '60ch' }}>
        Mostly working in{' '}
        <Box component="span" sx={{ color: 'var(--text)' }}>
          {TOOLS.slice(0, -1).join(', ')} and {TOOLS[TOOLS.length - 1]}
        </Box>
        .
      </Typography>
    </Section>
  );
}
