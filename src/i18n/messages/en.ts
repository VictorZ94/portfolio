/** UI copy. The source of truth: `es.ts` must match this shape. */
export const en = {
  meta: {
    title: 'Victor Zuluaga — Senior Full-Stack Engineer',
    description:
      'Victor Zuluaga — Senior Full-Stack Engineer specializing in React, Next.js, and ' +
      'TypeScript. Building scalable, production-grade web applications.',
  },
  nav: {
    label: 'Sections',
    work: 'Work',
    projects: 'Projects',
    contact: 'Contact',
  },
  theme: {
    label: 'Theme',
    group: 'Color theme',
    use: (name: string) => `Use ${name} colors`,
  },
  language: {
    group: 'Language',
  },
  hero: {
    role: 'Senior Full-Stack Engineer',
    tagline: 'I build web products end to end, from the database to the interface.',
    email: 'Email',
  },
  work: {
    title: 'Work',
    mostly: 'Mostly working in',
  },
  projects: {
    title: 'Projects',
    onGitHub: 'On GitHub',
    loading: 'Loading repositories…',
    noResponse: 'GitHub didn’t respond.',
    seeOnGitHub: 'See the repositories on GitHub',
    caseStudy: 'Read the case study',
    stars: (count: number) => `${count} stars`,
  },
  project: {
    status: { live: 'Live', wip: 'In progress' },
    links: { live: 'Live site', source: 'Source' },
    back: 'All projects',
    notFound: 'Project not found',
    overview: 'Overview',
    howItWorks: 'How it works',
    highlights: 'Highlights',
    screens: 'Screens',
    next: 'Next project',
  },
  screenshot: {
    toCome: 'Screenshot to come',
    toComeLabel: (alt: string) => `Screenshot to come: ${alt}`,
  },
  contact: {
    title: 'Contact',
  },
  footer: '© 2026 Victor Zuluaga',
};

export type Messages = typeof en;
