import type { Messages } from './en';

export const es: Messages = {
  meta: {
    title: 'Victor Zuluaga — Ingeniero Full-Stack Sénior',
    description:
      'Victor Zuluaga — Ingeniero Full-Stack Sénior especializado en React, Next.js y ' +
      'TypeScript. Construyo aplicaciones web escalables y listas para producción.',
  },
  nav: {
    label: 'Secciones',
    work: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  theme: {
    label: 'Tema',
    group: 'Tema de color',
    use: (name: string) => `Usar colores ${name}`,
  },
  language: {
    group: 'Idioma',
  },
  hero: {
    role: 'Ingeniero Full-Stack Sénior',
    tagline: 'Construyo productos web de principio a fin, desde la base de datos hasta la interfaz.',
    email: 'Correo',
  },
  work: {
    title: 'Experiencia',
    mostly: 'Trabajo principalmente con',
  },
  projects: {
    title: 'Proyectos',
    onGitHub: 'En GitHub',
    loading: 'Cargando repositorios…',
    noResponse: 'GitHub no respondió.',
    seeOnGitHub: 'Ver los repositorios en GitHub',
    caseStudy: 'Ver el caso de estudio',
    stars: (count: number) => `${count} estrellas`,
  },
  project: {
    status: { live: 'En producción', wip: 'En desarrollo' },
    links: { live: 'Sitio en vivo', source: 'Código' },
    back: 'Todos los proyectos',
    notFound: 'Proyecto no encontrado',
    overview: 'Resumen',
    howItWorks: 'Cómo funciona',
    highlights: 'Lo destacado',
    screens: 'Pantallas',
    next: 'Siguiente proyecto',
  },
  screenshot: {
    toCome: 'Captura próximamente',
    toComeLabel: (alt: string) => `Captura próximamente: ${alt}`,
  },
  contact: {
    title: 'Contacto',
  },
  footer: '© 2026 Victor Zuluaga',
};
