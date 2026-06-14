import { Box, Typography, Container, Paper, Stack } from '@mui/material';
import { useTheme } from '../theme';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML/CSS'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'React Router', 'Material-UI', 'Tailwind CSS', 'Redux'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'Microservices'],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'DynamoDB'],
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Vercel', 'Heroku'],
  },
  {
    name: 'Testing',
    skills: ['Jest', 'React Testing Library', 'Vitest', 'Cypress', 'Integration Tests'],
  },
];

export function Skills() {
  const { colorScheme } = useTheme();

  return (
    <Box id="skills" component="section" sx={{ mb: 6 }}>
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
          Skills
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {skillCategories.map((category, index) => (
            <Paper
              key={index}
              sx={{
                p: 3,
                bgcolor: colorScheme.surface,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                borderRadius: '8px',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: colorScheme.primary,
                  mb: 2,
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                }}
              >
                {category.name}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1.5,
                }}
              >
                {category.skills.map((skill, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      px: 2,
                      py: 1,
                      bgcolor: colorScheme.accent,
                      color: '#FFFFFF',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
