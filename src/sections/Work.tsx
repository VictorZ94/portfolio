import { Box, Typography } from '@mui/material';
import { Section } from '../components/Section';
import { metaSx } from '../styles';

interface Job {
  period: string;
  role: string;
  company: string;
  /** The single result worth remembering from this role. */
  highlight: string;
  tasks: string[];
  stack: string[];
}

const JOBS: Job[] = [
  {
    period: 'Apr 2024 – Feb 2026',
    role: 'Full-Stack Developer',
    company: 'Metatate',
    highlight:
      'Led frontend development and moved the backend from Next.js to NestJS, making the ' +
      'platform easier to scale and maintain.',
    tasks: [
      'Built complex flows in Next.js from Figma designs, including Gmail API invitations and ' +
        'data-policy approval workflows.',
      'Added Firebase multi-factor authentication (SMS and TOTP) and Google sign-in, with access ' +
        'control across multiple roles.',
      'Refactored backend services into NestJS modules with a clearer structure.',
    ],
    stack: ['Next.js', 'React', 'NestJS', 'TypeScript', 'Firebase', 'Gmail API'],
  },
  {
    period: 'Jan 2022 – Jan 2023',
    role: 'Software Developer',
    company: 'Teamclass',
    highlight:
      'Built address validation with geolocation APIs, significantly reducing delivery errors ' +
      'for physical event kits.',
    tasks: [
      'Designed and built a dynamic, Typeform-style survey engine in React and GraphQL.',
      'Improved data fetching and caching between frontend and backend with Apollo Client.',
      'Developed and optimised interfaces for a B2B corporate events platform in an agile team.',
    ],
    stack: ['React', 'Next.js', 'GraphQL', 'Apollo Client'],
  },
  {
    period: 'Oct 2021 – Dec 2021',
    role: 'Backend Developer',
    company: 'Roiback',
    highlight: 'Resolved every critical client-reported bug assigned during the contract.',
    tasks: [
      'Developed and maintained backend features for hotel e-commerce platforms in Django.',
      'Improved code quality and contributed to the team’s technical documentation.',
    ],
    stack: ['Python', 'Django'],
  },
];

const TOOLS = ['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'GCP'];

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
              gridTemplateColumns: { xs: '1fr', sm: '170px 1fr' },
              columnGap: 4,
              rowGap: 0.5,
              pb: 6,
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
              <Typography sx={{ mt: 0.75, maxWidth: '58ch' }}>{job.highlight}</Typography>
              <Box
                component="ul"
                sx={{ listStyle: 'none', p: 0, m: 0, mt: 1.5, display: 'grid', gap: 0.75 }}
              >
                {job.tasks.map((task) => (
                  <Box
                    component="li"
                    key={task}
                    sx={{
                      color: 'var(--soft)',
                      maxWidth: '62ch',
                      pl: 2,
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '0.75em',
                        width: 6,
                        height: '1px',
                        backgroundColor: 'var(--accent)',
                      },
                    }}
                  >
                    {task}
                  </Box>
                ))}
              </Box>
              <Typography sx={{ ...metaSx, mt: 1.5 }}>{job.stack.join(' · ')}</Typography>
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
