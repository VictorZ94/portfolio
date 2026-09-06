import { Box, Typography, Container } from '@mui/material';
import SectionTitle from '../components/section-title';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Redux',
      'React Query',
      'Material UI',
      'Tailwind CSS',
    ],
  },
  {
    name: 'Backend',
    skills: [
      'Node.js',
      'Nest.js',
      'Express',
      'FastAPI',
      'Django',
      'GraphQL',
      'PostgreSQL',
      'MongoDB',
      'Redis',
    ],
  },
  {
    name: 'Infrastructure',
    skills: [
      'AWS',
      'GCP',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Vercel',
      'Terraform',
    ],
  },
  {
    name: 'Practices',
    skills: [
      'System design',
      'TDD',
      'Code review',
      'Mentoring',
      'Observability',
      'Performance',
    ],
  },
];

function SkillGroup({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Box
      ref={ref}
      sx={{
        opacity: 0,
        transform: 'translateY(8px)',
        transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.06}s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.06}s`,
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
    >
      <Typography
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--ink-mute)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          mb: 1.5,
        }}
      >
        {category.name}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 0.75,
        }}
      >
        {category.skills.map((skill) => (
          <Box
            key={skill}
            sx={{
              px: 1.25,
              py: 0.5,
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              color: 'var(--ink-text)',
              border: '1px solid var(--border-strong)',
              borderRadius: 1,
              backgroundColor: 'var(--paper-2)',
              transition: 'all 0.15s ease',
              '&:hover': {
                borderColor: 'var(--ink-primary)',
                color: 'var(--ink-primary)',
              },
            }}
          >
            {skill}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export function Skills() {
  return (
    <Box
      id="skills"
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
        <SectionTitle text="Skills" band />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: { xs: 3, md: 5 },
          }}
        >
          {skillCategories.map((category, i) => (
            <SkillGroup key={category.name} category={category} index={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
