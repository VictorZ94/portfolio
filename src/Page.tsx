import * as React from 'react';
import { Box } from '@mui/material';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Work } from './sections/Work';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { ProjectPage } from './pages/ProjectPage';
import { parseRoute, useHash } from './router';

function Home() {
  return (
    <Box component="main">
      <Hero />
      <Work />
      <Projects />
      <Contact />
    </Box>
  );
}

export default function Page() {
  const hash = useHash();
  const route = parseRoute(hash);

  // Switching views replaces the page content, so scroll explicitly: to the top of
  // a project page, or to the section anchor (`#projects`) when coming back home.
  React.useEffect(() => {
    const current = parseRoute(hash);
    const target = current.name === 'home' && current.section
      ? document.getElementById(current.section)
      : null;
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [hash]);

  return (
    <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 2, sm: 4, md: 8 } }}>
      <Header />
      {route.name === 'project' ? <ProjectPage slug={route.slug} /> : <Home />}
    </Box>
  );
}
