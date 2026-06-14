import { Box, Typography, Container, Paper } from '@mui/material';
// import { useTheme } from '../theme';

export function About() {
  // const { colorScheme } = useTheme();

  return (
    <Box id="about" component="section" sx={{ mb: 6 }}>
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
          About
        </Typography>
        <Paper
          sx={{
            p: { xs: 3, md: 4 },
            // bgcolor: colorScheme.surface,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            borderRadius: '8px',
          }}
        >
          <Typography
            sx={{
              fontSize: '1rem',
              lineHeight: 1.8,
              // color: colorScheme.text,
              mb: 2,
            }}
          >
            I'm a passionate software engineer with a focus on building scalable, user-centric applications.
            With expertise in modern web technologies and a strong foundation in computer science fundamentals,
            I thrive in collaborative environments where clean code and thoughtful design matter.
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              lineHeight: 1.8,
              // color: colorScheme.text,
            }}
          >
            My journey has taken me through full-stack development, where I've contributed to projects
            ranging from startups to established tech companies. I'm committed to continuous learning
            and staying current with industry best practices.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
