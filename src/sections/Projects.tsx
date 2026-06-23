// @Packages
import { Box, Typography, Container, Paper, Stack, Chip } from '@mui/material';

// @Components
import SectionTitle from '../components/section-title';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization dashboard for monitoring application metrics and user behavior with interactive charts.',
    technologies: ['React', 'D3.js', 'TypeScript', 'WebSocket'],
  },
  {
    title: 'Content Management System',
    description: 'Headless CMS with API-first design, supporting multiple content types and flexible publishing workflows.',
    technologies: ['Node.js', 'GraphQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Task Collaboration Tool',
    description: 'Real-time collaborative task management application with team features and activity tracking.',
    technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
  },
  {
    title: 'Mobile Health App',
    description: 'Cross-platform mobile application for health tracking with cloud sync and push notifications.',
    technologies: ['React Native', 'Node.js', 'AWS', 'PostgreSQL'],
  },
  {
    title: 'Developer Blog',
    description: 'Static blog platform with SEO optimization, markdown support, and automated deployment.',
    technologies: ['Next.js', 'MDX', 'Vercel', 'TypeScript'],
  },
];

export function Projects() {
  // const { colorScheme } = useTheme();

  return (
    <Box id="projects" component="section" sx={{ mb: 6 }}>
      <SectionTitle text="Projects" />
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            fontWeight: 700,
            textTransform: 'uppercase',
            // color: colorScheme.primary,
            mb: 3,
            letterSpacing: '0.05em',
          }}
        >
          Projects
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {projects.map((project, index) => (
            <Paper
              key={index}
              sx={{
                p: 3,
                // bgcolor: colorScheme.surface,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12)',
                },
              }}
            >
              <Box
                sx={{
                  height: '160px',
                  // bgcolor: colorScheme.accent,
                  borderRadius: '6px',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '3rem',
                }}
              >
                →
              </Box>
              <Typography
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  // color: colorScheme.text,
                  mb: 1,
                }}
              >
                {project.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  // color: colorScheme.textSecondary,
                  mb: 2,
                  flexGrow: 1,
                }}
              >
                {project.description}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {project.technologies.map((tech, idx) => (
                  <Chip
                    key={idx}
                    label={tech}
                    size="small"
                    sx={{
                      // bgcolor: colorScheme.accent,
                      color: '#FFFFFF',
                      fontSize: '0.8rem',
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
