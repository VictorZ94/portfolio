import { Box, Typography, Container } from '@mui/material';
import SectionTitle from '../components/section-title';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SkillCategory {
  name: string;
  skills: string[];
  years: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    years: '6+ years',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Redux',
      'React Query',
      'Material UI',
      'Tailwind CSS',
      'Design Systems',
    ],
  },
  {
    name: 'Backend',
    years: '5+ years',
    skills: [
      'Node.js',
      'Nest.js',
      'Express',
      'FastAPI',
      'Django',
      'GraphQL',
      'REST API design',
      'PostgreSQL',
      'MongoDB',
      'Redis',
    ],
  },
  {
    name: 'Infrastructure',
    years: '4+ years',
    skills: [
      'AWS',
      'GCP',
      'Docker',
      'Kubernetes',
      'CI/CD pipelines',
      'Vercel',
      'Terraform',
    ],
  },
  {
    name: 'Practices',
    years: 'Ongoing',
    skills: [
      'System design',
      'Test-driven development',
      'Code review',
      'Mentoring',
      'Agile / Scrum',
      'Observability',
      'Performance profiling',
    ],
  },
];

function SkillRow({
  category,
  index,
  isLast,
}: {
  category: SkillCategory;
  index: number;
  isLast: boolean;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Box
      ref={ref}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '160px 100px 1fr' },
        gap: { xs: 0.5, md: 6 },
        py: 4,
        borderBottom: isLast ? 'none' : '1px solid var(--border)',
        opacity: 0,
        transform: 'translateY(8px)',
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.08}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.08}s`,
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
    >
      <Typography
        sx={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--ink-text)',
          letterSpacing: '-0.01em',
        }}
      >
        {category.name}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--ink-mute)',
          letterSpacing: '0.05em',
        }}
      >
        {category.years}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.92rem',
          color: 'var(--ink-soft)',
          lineHeight: 1.7,
        }}
      >
        {category.skills.join(' · ')}
      </Typography>
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
        py: { xs: 10, md: 14 },
        bgcolor: 'var(--paper)',
        borderTop: '1px solid var(--border)',
        scrollMarginTop: { xs: 64, sm: 0 },
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          text="Skills & tools"
          eyebrow="04 — Skills"
          subtitle="What I reach for, organized by area of practice."
        />

        <Box
          sx={{
            borderTop: '1px solid var(--border)',
          }}
        >
          {skillCategories.map((category, i) => (
            <SkillRow
              key={category.name}
              category={category}
              index={i}
              isLast={i === skillCategories.length - 1}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}