import { Box, Typography, Container, Chip, Stack, Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SectionTitle from '../components/section-title';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Project {
  num: string;
  title: string;
  subtitle: string;
  problem: string;
  built: string;
  impact: string[];
  stack: string[];
  link?: { label: string; href: string };
  featured?: boolean;
  /** When true, only metadata is shown so Victor can fill in real content later */
  placeholder?: boolean;
}

const projects: Project[] = [
  {
    num: '01',
    title: 'E-Commerce Platform',
    subtitle:
      'Real-time inventory, payment processing, and admin tooling for a multi-tenant storefront.',
    problem:
      'The legacy monolith could not handle peak traffic; checkout failures during sales events damaged revenue and customer trust.',
    built:
      'Led the migration to an event-driven architecture using a queue-based order pipeline. Replaced synchronous billing calls with idempotent, retryable workers and added observability across every stage.',
    impact: [
      '99.7% reduction in checkout errors during peak events',
      'Order processing time cut from 2 hours to under 5 minutes',
      'p99 API latency for product search improved by 40% via cache layer',
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
    link: { label: 'Case study', href: '#' },
    featured: true,
  },
  {
    num: '02',
    title: 'TODO — Analytics Dashboard',
    subtitle:
      '// TODO: Replace with a real project. Describe what it is in one sentence.',
    problem:
      '// TODO: What gap or pain point did this project solve? Be specific about the problem.',
    built:
      '// TODO: What did you build? Highlight architecture decisions, scale challenges, ownership.',
    impact: [
      '// TODO: measurable impact #1 (with a number)',
      '// TODO: measurable impact #2 (with a number)',
      '// TODO: measurable impact #3 (with a number)',
    ],
    stack: ['React', 'D3.js', 'TypeScript', 'WebSocket'],
    link: { label: 'Case study', href: '#' },
    placeholder: true,
  },
  {
    num: '03',
    title: 'TODO — Headless CMS',
    subtitle:
      '// TODO: Replace with a real project. Describe what it is in one sentence.',
    problem:
      '// TODO: What gap or pain point did this project solve? Be specific about the problem.',
    built:
      '// TODO: What did you build? Highlight architecture decisions, scale challenges, ownership.',
    impact: [
      '// TODO: measurable impact #1 (with a number)',
      '// TODO: measurable impact #2 (with a number)',
      '// TODO: measurable impact #3 (with a number)',
    ],
    stack: ['Node.js', 'GraphQL', 'MongoDB', 'Redis'],
    link: { label: 'Case study', href: '#' },
    placeholder: true,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const isPlaceholder = project.placeholder;

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        bgcolor: 'var(--paper)',
        border: '1px solid var(--border)',
        borderRadius: 2,
        p: { xs: 2.5, md: 3.5 },
        display: 'flex',
        flexDirection: 'column',
        opacity: 0,
        transform: 'translateY(12px)',
        transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.08}s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.08}s, border-color 0.2s ease`,
        '&:hover': {
          borderColor: 'var(--ink-primary)',
        },
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
    >
      {/* Header: number + stack */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          mb: 2,
          pb: 2,
          borderBottom: '1px solid var(--border)',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5 }}>
          <Typography
            sx={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--ink-mute)',
              letterSpacing: '0.05em',
            }}
          >
            № {project.num}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--ink-mute)',
            letterSpacing: '0.05em',
            textAlign: 'right',
          }}
        >
          {project.stack.join(' · ')}
        </Typography>
      </Box>

      {/* Title + subtitle */}
      <Typography
        component="h3"
        sx={{
          fontFamily: 'var(--font-sans)',
          fontSize: { xs: '1.2rem', md: project.featured ? '1.55rem' : '1.25rem' },
          fontWeight: 600,
          color: 'var(--ink-text)',
          mb: 1,
          letterSpacing: '-0.015em',
          lineHeight: 1.2,
        }}
      >
        {project.title}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.9rem',
          color: 'var(--ink-soft)',
          mb: 3,
          lineHeight: 1.5,
          maxWidth: 720,
        }}
      >
        {project.subtitle}
      </Typography>

      {/* Problem / Built / Impact */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '90px 1fr' },
          gap: { xs: 0.25, md: 3 },
          mb: 1.5,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--ink-mute)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            pt: 0.25,
          }}
        >
          Problem
        </Typography>
        <Typography
          sx={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.55,
          }}
        >
          {project.problem}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '90px 1fr' },
          gap: { xs: 0.25, md: 3 },
          mb: 1.5,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--ink-mute)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            pt: 0.25,
          }}
        >
          Built
        </Typography>
        <Typography
          sx={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.55,
          }}
        >
          {project.built}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '90px 1fr' },
          gap: { xs: 0.25, md: 3 },
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--ink-mute)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            pt: 0.25,
          }}
        >
          Impact
        </Typography>
        <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
          {project.impact.map((item) => (
            <Box
              key={item}
              component="li"
              sx={{
                position: 'relative',
                pl: 2.5,
                mb: 0.5,
                fontSize: '0.85rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.5,
                '&::before': {
                  content: '"–"',
                  position: 'absolute',
                  left: 0,
                  color: 'var(--ink-primary)',
                  fontWeight: 600,
                },
                '&:last-child': { mb: 0 },
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Footer: stack chips + link */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 'auto',
          pt: 2,
          borderTop: '1px solid var(--border)',
          flexWrap: 'wrap',
          gap: 1.5,
        }}
      >
        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.5 }}>
          {project.stack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                height: 22,
                color: 'var(--ink-soft)',
                borderColor: 'var(--border)',
                backgroundColor: 'var(--paper-2)',
                borderRadius: 1,
              }}
            />
          ))}
        </Stack>
        {project.link && (
          <Button
            href={project.link.href}
            endIcon={<ArrowOutwardIcon sx={{ fontSize: 14 }} />}
            disabled={isPlaceholder}
            sx={{
              color: 'var(--ink-text)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 500,
              px: 1.25,
              py: 0.25,
              minWidth: 0,
              '&:hover': {
                bgcolor: 'transparent',
                color: 'var(--ink-primary)',
              },
              '&.Mui-disabled': {
                color: 'var(--ink-mute)',
                opacity: 1,
              },
            }}
          >
            {isPlaceholder ? 'Soon' : project.link.label}
          </Button>
        )}
      </Box>
    </Box>
  );
}

export function Projects() {
  return (
    <Box
      id="projects"
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
        <SectionTitle text="Projects" band />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gridTemplateRows: { md: 'auto auto' },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          <Box sx={{ gridColumn: { md: 'span 2' } }}>
            <ProjectCard project={projects[0]} index={0} />
          </Box>
          <ProjectCard project={projects[1]} index={1} />
          <ProjectCard project={projects[2]} index={2} />
        </Box>
      </Container>
    </Box>
  );
}