import { Box, Typography, Container } from '@mui/material';
import useTheme from '../theme';
import Typewriter from 'typewriter-effect';

export function Hero() {
  // const { colorScheme } = useTheme();

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        bgcolor: '#FF5722',
        height: '100vh',
        
      }}
    >
      <Container maxWidth="lg" sx={{ pt: 3 }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            color: '#FFFFFF',
          }}
        >
          Hi, I'm Victor Zuluaga
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.9)',
            mb: 2,
            display: 'inline',
          }}
        >
           I'm a
        </Typography>{" "}
        <Typewriter
          options={{
            skipAddStyles: true,
            wrapperClassName: "typewriter",
            strings: ['Software Engineer', 'Web Developer', 'Tech Enthusiast'],
            autoStart: true,
            loop: true,
          }}
        />
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: '1rem', md: '1.25rem' },
            color: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          Software developer specializing in full-stack web development. I create scalable, user-centric applications with a focus on clean code and thoughtful design.
        </Typography>
      </Container>
    </Box>
  );
}
