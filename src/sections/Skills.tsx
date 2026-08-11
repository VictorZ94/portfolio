import { Box, Typography, Container } from '@mui/material';
import SectionTitle from '../components/section-title';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SkillCategory {
  name: string;
  skills: string[];
  ink: 'primary' | 'secondary';
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
    ink: 'primary',
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Material-UI', 'Tailwind', 'Redux'],
    ink: 'secondary',
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'GraphQL', 'REST', 'FastAPI'],
    ink: 'primary',
  },
  {
    name: 'Tools',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD'],
    ink: 'secondary',
  },
];

function SkillStamp({
  skill,
  ink,
  delay,
}: {
  skill: string;
  ink: 'primary' | 'secondary';
  delay: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const color =
    ink === 'primary' ? 'var(--ink-primary)' : 'var(--ink-secondary)';
  const shadow =
    ink === 'primary' ? 'var(--ink-secondary)' : 'var(--ink-primary)';
  const rotation = (skill.length % 5) - 2;

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        display: 'inline-block',
        opacity: 0,
        transform: `scale(1.6) rotate(${rotation - 6}deg)`,
        transition: `opacity 0.5s ease ${delay}s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`,
        '&:hover': {
          transform: `scale(0.94) rotate(${rotation}deg)`,
          '& .stamp-shadow': {
            transform: 'translate(3px, 3px)',
          },
        },
        ...(isVisible && {
          opacity: 1,
          transform: `scale(1) rotate(${rotation}deg)`,
        }),
      }}
    >
      <Box
        className="stamp-shadow"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: shadow,
          transform: 'translate(2px, 2px)',
          transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          border: `2px solid ${color}`,
          backgroundColor: 'var(--paper)',
          px: 1.5,
          py: 0.7,
          fontFamily: 'var(--font-stamp)',
          fontSize: '0.85rem',
          color: color,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          lineHeight: 1,
          cursor: 'default',
        }}
      >
        {skill}
      </Box>
    </Box>
  );
}

function SkillCategoryBlock({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const labelColor =
    category.ink === 'primary'
      ? 'var(--ink-primary)'
      : 'var(--ink-secondary)';

  return (
    <Box
      ref={ref}
      sx={{
        opacity: 0,
        transform: 'translateY(20px) rotate(-0.5deg)',
        transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.12}s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.12}s`,
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0) rotate(0deg)',
        }),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 2,
          mb: 3,
          pb: 1.5,
          borderBottom: '2px dashed var(--ink-text)',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            fontWeight: 700,
            color: 'var(--ink-text)',
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
          }}
        >
          {category.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'var(--font-stamp)',
            fontSize: '0.7rem',
            color: labelColor,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          {String(index + 1).padStart(2, '0')}/04
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
        {category.skills.map((skill, i) => (
          <SkillStamp
            key={skill}
            skill={skill}
            ink={category.ink}
            delay={0.2 + i * 0.07}
          />
        ))}
      </Box>
    </Box>
  );
}

export function Skills() {
  return (
    <Box
      id="skills"
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 16 },
        bgcolor: 'var(--paper)',
        scrollMarginTop: { xs: 64, sm: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <SectionTitle
            text="Skills"
            index="— page 05 —"
            subtitle="tools of the trade"
          />
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: 5, md: 7 },
          }}
        >
          {skillCategories.map((category, i) => (
            <SkillCategoryBlock
              key={category.name}
              category={category}
              index={i}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
