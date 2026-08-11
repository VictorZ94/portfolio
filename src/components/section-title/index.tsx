import { Box, Typography } from '@mui/material';
import { SquiggleUnderline } from '../SquiggleUnderline';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionTitleProps {
  text: string;
  index?: string;
  subtitle?: string;
  ink?: 'primary' | 'secondary';
}

const SectionTitle = ({
  text,
  index,
  subtitle,
  ink = 'primary',
}: SectionTitleProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const color =
    ink === 'primary' ? 'var(--ink-primary)' : 'var(--ink-secondary)';

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        display: 'inline-block',
        mb: 5,
        opacity: 0,
        transform: 'translateY(24px) rotate(-1deg)',
        transition:
          'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0) rotate(0deg)',
        }),
      }}
    >
      {index && (
        <Typography
          sx={{
            fontFamily: 'var(--font-stamp)',
            fontSize: '0.95rem',
            color: 'var(--ink-text-mute)',
            mb: 1.5,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          {index}
        </Typography>
      )}
      <Typography
        component="h2"
        sx={{
          fontFamily: 'var(--font-display)',
          fontSize: { xs: '3rem', md: '5rem' },
          fontWeight: 700,
          color: 'var(--ink-text)',
          letterSpacing: '-0.01em',
          lineHeight: 0.95,
          mb: 1,
          textTransform: 'uppercase',
        }}
      >
        {text}
      </Typography>
      <Box sx={{ position: 'relative', height: 14 }}>
        <SquiggleUnderline
          width={Math.max(160, text.length * 22)}
          height={14}
          color={color}
          delay={0.4}
        />
      </Box>
      {subtitle && (
        <Typography
          sx={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1.4rem',
            color: 'var(--ink-text-mute)',
            mt: 2,
            transform: 'rotate(-2deg)',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
