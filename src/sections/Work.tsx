import { Box, Typography } from '@mui/material';
import { Section } from '../components/Section';
import { metaSx } from '../styles';
import { useLanguage } from '../context/useLanguage';
import type { Locale, Localized } from '../i18n/locales';

interface Job {
  /** `YYYY-MM`, formatted per locale. */
  start: string;
  end: string;
  role: Localized<string>;
  company: string;
  /** The single result worth remembering from this role. */
  highlight: Localized<string>;
  tasks: Localized<string[]>;
  stack: string[];
}

const JOBS: Job[] = [
  {
    start: '2024-04',
    end: '2026-02',
    role: { en: 'Full-Stack Developer', es: 'Desarrollador Full-Stack' },
    company: 'Metatate',
    highlight: {
      en:
        'Led frontend development and moved the backend from Next.js to NestJS, making the ' +
        'platform easier to scale and maintain.',
      es:
        'Lideré el desarrollo frontend y migré el backend de Next.js a NestJS, haciendo la ' +
        'plataforma más fácil de escalar y mantener.',
    },
    tasks: {
      en: [
        'Built complex flows in Next.js from Figma designs, including Gmail API invitations and ' +
          'data-policy approval workflows.',
        'Added Firebase multi-factor authentication (SMS and TOTP) and Google sign-in, with ' +
          'access control across multiple roles.',
        'Refactored backend services into NestJS modules with a clearer structure.',
      ],
      es: [
        'Construí flujos complejos en Next.js a partir de diseños en Figma, incluidas ' +
          'invitaciones con la API de Gmail y flujos de aprobación de políticas de datos.',
        'Implementé autenticación multifactor con Firebase (SMS y TOTP) e inicio de sesión con ' +
          'Google, con control de acceso para múltiples roles.',
        'Refactoricé los servicios backend en módulos de NestJS con una estructura más clara.',
      ],
    },
    stack: ['Next.js', 'React', 'NestJS', 'TypeScript', 'Firebase', 'Gmail API'],
  },
  {
    start: '2022-01',
    end: '2023-01',
    role: { en: 'Software Developer', es: 'Desarrollador de Software' },
    company: 'Teamclass',
    highlight: {
      en:
        'Built address validation with geolocation APIs, significantly reducing delivery errors ' +
        'for physical event kits.',
      es:
        'Construí un sistema de validación de direcciones con APIs de geolocalización que redujo ' +
        'significativamente los errores de entrega de kits para eventos físicos.',
    },
    tasks: {
      en: [
        'Designed and built a dynamic, Typeform-style survey engine in React and GraphQL.',
        'Improved data fetching and caching between frontend and backend with Apollo Client.',
        'Developed and optimised interfaces for a B2B corporate events platform in an agile team.',
      ],
      es: [
        'Diseñé y desarrollé un motor de encuestas dinámico, al estilo Typeform, con React y ' +
          'GraphQL.',
        'Mejoré la obtención y el almacenamiento en caché de datos entre frontend y backend con ' +
          'Apollo Client.',
        'Desarrollé y optimicé interfaces para una plataforma B2B de eventos corporativos en un ' +
          'equipo ágil.',
      ],
    },
    stack: ['React', 'Next.js', 'GraphQL', 'Apollo Client'],
  },
  {
    start: '2021-10',
    end: '2021-12',
    role: { en: 'Backend Developer', es: 'Desarrollador Backend' },
    company: 'Roiback',
    highlight: {
      en: 'Resolved every critical client-reported bug assigned during the contract.',
      es: 'Resolví todos los bugs críticos reportados por clientes que se me asignaron durante el contrato.',
    },
    tasks: {
      en: [
        'Developed and maintained backend features for hotel e-commerce platforms in Django.',
        'Improved code quality and contributed to the team’s technical documentation.',
      ],
      es: [
        'Desarrollé y mantuve funcionalidades backend para plataformas de comercio electrónico ' +
          'hotelero en Django.',
        'Mejoré la calidad del código y contribuí a la documentación técnica del equipo.',
      ],
    },
    stack: ['Python', 'Django'],
  },
];

const TOOLS = ['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'GCP'];

function formatMonth(yearMonth: string, locale: Locale) {
  const [year, month] = yearMonth.split('-').map(Number);
  return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(year, month - 1, 1)));
}

export function Work() {
  const { locale, t } = useLanguage();
  const tools = new Intl.ListFormat(locale, { style: 'long', type: 'conjunction' }).format(TOOLS);

  return (
    <Section id="work" title={t.work.title}>
      <Box component="ol" sx={{ listStyle: 'none', p: 0, m: 0 }}>
        {JOBS.map((job) => (
          <Box
            component="li"
            key={job.company}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '170px 1fr' },
              columnGap: 4,
              rowGap: 0.5,
              pb: 6,
            }}
          >
            <Typography sx={{ ...metaSx, pt: 0.5 }}>
              {formatMonth(job.start, locale)} – {formatMonth(job.end, locale)}
            </Typography>
            <Box>
              <Typography component="h3" sx={{ fontSize: '1.15rem', fontWeight: 600 }}>
                {job.role[locale]}
                <Box component="span" sx={{ fontWeight: 400, color: 'var(--soft)' }}>
                  {', '}
                  {job.company}
                </Box>
              </Typography>
              <Typography sx={{ mt: 0.75, maxWidth: '58ch' }}>{job.highlight[locale]}</Typography>
              <Box
                component="ul"
                sx={{ listStyle: 'none', p: 0, m: 0, mt: 1.5, display: 'grid', gap: 0.75 }}
              >
                {job.tasks[locale].map((task) => (
                  <Box
                    component="li"
                    key={task}
                    sx={{
                      color: 'var(--soft)',
                      maxWidth: '62ch',
                      pl: 2,
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '0.75em',
                        width: 6,
                        height: '1px',
                        backgroundColor: 'var(--accent)',
                      },
                    }}
                  >
                    {task}
                  </Box>
                ))}
              </Box>
              <Typography sx={{ ...metaSx, mt: 1.5 }}>{job.stack.join(' · ')}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Typography sx={{ ...metaSx, fontSize: '1.05rem', maxWidth: '60ch' }}>
        {t.work.mostly}{' '}
        <Box component="span" sx={{ color: 'var(--text)' }}>
          {tools}
        </Box>
        .
      </Typography>
    </Section>
  );
}
