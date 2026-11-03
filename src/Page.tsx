import { Box } from '@mui/material';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Work } from './sections/Work';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

export default function Page() {
  return (
    <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 2, sm: 4, md: 8 } }}>
      <Header />
      <Box component="main">
        <Hero />
        <Work />
        <Projects />
        <Contact />
      </Box>
    </Box>
  );
}
