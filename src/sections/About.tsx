// @Packages
import { Box, Container, Typography } from '@mui/material';

// @Components
import SectionTitle from '../components/section-title';

export function About() {
  return (
    <Box component="section" id="about">
      <SectionTitle text="About Me" />
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, height: '100vh' }}>
          <Typography
            sx={{
              fontSize: '1.88rem',
              mb: 2,
            }}
          >
            I’m a Frontend Engineer specialised in React and Next.js, with experience building modern, scalable, product-focused web applications. I focus on turning complex requirements and designs into clear, efficient, and maintainable user interfaces, with strong attention to user experience and code quality.
          </Typography>
          <Typography
            sx={{
              fontSize: '1.88rem',
              mb: 2,
            }}
          >
            I’ve worked on real-world production products, taking ownership of complete features—from frontend implementation to API integrations and authentication flows. My approach is to deliver solid solutions with tangible impact, balancing speed, quality, and long-term maintainability.
          </Typography>
          <Typography sx={{
              fontSize: '1.88rem',
            }}>
            Languages: JavaScript, TypeScript, Python <br />
            Frameworks: React, Next.js, Node.js, Nest.js, Django, FastAPI <br />
            Tools: Git, Docker, AWS, Vercel, GCP, Attlassian, Pandas, NumPy, scikit-learn
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
