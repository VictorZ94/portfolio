import { Box, Typography, Container, Stack } from '@mui/material';
import SectionTitle from '../components/section-title';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { HandDrawnArrow } from '../components/HandDrawnArrow';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  ink: 'primary' | 'secondary';
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    ink: 'primary',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Real-time data visualization dashboard for monitoring application metrics and user behavior with interactive charts.',
    technologies: ['React', 'D3.js', 'TypeScript', 'WebSocket'],
    ink: 'secondary',
  },
  {
    title: 'Headless CMS',
    description:
      'API-first CMS with multiple content types, flexible publishing workflows, and a custom editor experience.',
    technologies: ['Node.js', 'GraphQL', 'MongoDB', 'Redis'],
    ink: 'primary',
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
  const inkColor =
    project.ink === 'primary'
      ? 'var(--ink-primary)'
      : 'var(--ink-secondary)';
  const shadowColor =
    project.ink === 'primary'
      ? 'var(--ink-secondary)'
      : 'var(--ink-primary)';
  const rotation = index % 2 === 0 ? -0.5 : 0.5;

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        bgcolor: 'var(--paper)',
        border: '2px solid var(--ink-text)',
        p: { xs: 3, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        transform: `rotate(${rotation}deg)`,
        opacity: 0,
        transition: `opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.15}s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1)`,
        boxShadow: `4px 4px 0 var(--ink-text)`,
        '&:hover': {
          transform: `rotate(0deg) translate(-2px, -2px)`,
          boxShadow: `8px 8px 0 ${shadowColor}`,
          '& .project-arrow-wrap': {
            transform: 'translateX(4px) rotate(-3deg)',
          },
        },
        ...(isVisible && {
          opacity: 1,
        }),
      }}
    >
      {/* Index + ink tab */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          mb: 3,
        }}
      >
        <Box
          sx={{
            border: `2px solid ${inkColor}`,
            px: 1,
            py: 0.3,
            transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)`,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'var(--font-stamp)',
              fontSize: '0.75rem',
              color: inkColor,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            № {String(index + 1).padStart(2, '0')}
          </Typography>
        </Box>

        <Box className="project-arrow-wrap" sx={{ transition: 'transform 0.4s ease' }}>
          <HandDrawnArrow
            width={50}
            height={28}
            color={inkColor}
            rotation={-12}
            delay={0.6 + index * 0.15}
          />
        </Box>
      </Box>

      <Typography
        sx={{
          fontFamily: 'var(--font-display)',
          fontSize: { xs: '1.5rem', md: '1.85rem' },
          fontWeight: 700,
          color: 'var(--ink-text)',
          mb: 2,
          lineHeight: 1.1,
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
        }}
      >
        {project.title}
      </Typography>

      <Typography
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.9rem',
          color: 'var(--ink-text-soft)',
          mb: 3,
          flexGrow: 1,
          lineHeight: 1.7,
        }}
      >
        {project.description}
      </Typography>

      <Stack
        direction="row"
        sx={{ flexWrap: 'wrap', gap: 0.75, mt: 'auto' }}
      >
        {project.technologies.map((tech) => (
          <Box
            key={tech}
            sx={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--ink-text-soft)',
              border: '1.5px solid var(--ink-text)',
              px: 1,
              py: 0.3,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: inkColor,
                color: inkColor,
                transform: 'rotate(-2deg)',
              },
            }}
          >
            {tech}
          </Box>
        ))}
      </Stack>
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
        py: { xs: 10, md: 16 },
        bgcolor: 'var(--paper)',
        scrollMarginTop: { xs: 64, sm: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <SectionTitle
            text="Projects"
            index="— page 04 —"
            subtitle="things I've shipped"
          />
        </Box>

        {/* Asymmetric grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: 4, md: 6 },
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
