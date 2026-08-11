import { Box, Typography, Container, Button, Stack } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { motion } from 'motion/react';
import { SquiggleUnderline } from '../components/SquiggleUnderline';
import { HandDrawnArrow } from '../components/HandDrawnArrow';
import { useScrollReveal } from '../hooks/useScrollReveal';

const HERO_NAME = "Hi, I'm Victor";

function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <Box component="span" sx={{ display: 'inline-block' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 32, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </motion.span>
      ))}
    </Box>
  );
}

export function Hero() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="hero"
      component="section"
      ref={ref}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'var(--paper)',
        overflow: 'hidden',
        scrollMarginTop: { xs: 64, sm: 0 },
      }}
    >
      {/* Off-register halftone bleed top-right */}
      <Box
        sx={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '55%',
          height: '70%',
          background:
            'radial-gradient(ellipse 60% 50% at center, var(--ink-primary) 0%, transparent 60%)',
          opacity: 0.18,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />
      {/* Off-register blue bleed bottom-left */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-20%',
          left: '-15%',
          width: '50%',
          height: '70%',
          background:
            'radial-gradient(ellipse 60% 50% at center, var(--ink-secondary) 0%, transparent 60%)',
          opacity: 0.15,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Issue tag — top */}
        <motion.div
          initial={{ opacity: 0, y: 8, rotate: -3 }}
          animate={isVisible ? { opacity: 1, y: 0, rotate: -2 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box
            sx={{
              display: 'inline-block',
              border: '2px solid var(--ink-text)',
              px: 1.5,
              py: 0.4,
              mb: 4,
              transform: 'rotate(-2deg)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-stamp)',
                fontSize: '0.95rem',
                color: 'var(--ink-text)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                lineHeight: 1,
              }}
            >
              ISSUE №01 — PORTFOLIO
            </Typography>
          </Box>
        </motion.div>

        {/* Massive split-text name */}
        <Typography
          component="h1"
          sx={{
            fontFamily: 'var(--font-display)',
            fontSize: { xs: '3.5rem', sm: '5.5rem', md: '8.5rem' },
            fontWeight: 700,
            color: 'var(--ink-text)',
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            mb: 0,
            maxWidth: '100%',
          }}
        >
          <SplitText text={HERO_NAME} delay={0.3} />
        </Typography>

        {/* Massive Zuluaga in primary ink */}
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          <Typography
            component="h1"
            sx={{
              fontFamily: 'var(--font-display)',
              fontSize: { xs: '4rem', sm: '7rem', md: '11rem' },
              fontWeight: 700,
              color: 'var(--ink-primary)',
              lineHeight: 0.85,
              letterSpacing: '-0.05em',
              textTransform: 'uppercase',
              display: 'inline-block',
              transform: 'rotate(-1deg)',
              opacity: 0,
              animation: 'stamp-slam 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 1s forwards',
            }}
          >
            Zuluaga
          </Typography>
          {/* Squiggle under Zuluaga */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '8%',
              left: '5%',
              transform: 'rotate(-2deg)',
            }}
          >
            <SquiggleUnderline
              width={500}
              height={20}
              color="var(--ink-secondary)"
              delay={1.8}
              variant="underline"
            />
          </Box>
        </Box>

        {/* Typewriter tagline */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            mt: 6,
            mb: 5,
            gap: 1,
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: { xs: '1.25rem', md: '1.75rem' },
              color: 'var(--ink-text)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            I build
          </Typography>
          <Typography
            component="span"
            sx={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: { xs: '1.25rem', md: '1.75rem' },
              color: 'var(--ink-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'inline-block',
                width: '3px',
                height: '0.9em',
                backgroundColor: 'var(--ink-secondary)',
                marginLeft: '6px',
                verticalAlign: '-3px',
                animation: 'blink 1s steps(2) infinite',
              },
            }}
          >
            <Typewriter
              options={{
                skipAddStyles: true,
                wrapperClassName: 'custom_typewriter',
                strings: [
                  'scalable web apps.',
                  'thoughtful interfaces.',
                  'clean architecture.',
                  'delightful experiences.',
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </Typography>
        </Box>

        {/* Description + arrow */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 3,
            flexWrap: 'wrap',
            mb: 6,
            maxWidth: 720,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 2.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ flex: 1, minWidth: 280 }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-mono)',
                fontSize: { xs: '0.95rem', md: '1rem' },
                color: 'var(--ink-text-soft)',
                lineHeight: 1.7,
              }}
            >
              Software developer specializing in full-stack web development.
              I create scalable, user-centric applications with a focus on
              clean code and thoughtful design — where every detail carries
              weight.
            </Typography>
          </motion.div>
          <Box sx={{ flexShrink: 0, mt: -1 }}>
            <HandDrawnArrow
              width={80}
              height={40}
              color="var(--ink-primary)"
              delay={2.4}
              rotation={-15}
            />
          </Box>
        </Box>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 2.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              onClick={() => scrollTo('projects')}
              sx={{
                bgcolor: 'var(--ink-primary)',
                color: 'var(--paper)',
                px: 4,
                py: 1.5,
                fontSize: '0.9rem',
                fontWeight: 700,
                borderRadius: 0,
                border: '2px solid var(--ink-primary)',
                boxShadow: '4px 4px 0 var(--ink-text)',
                position: 'relative',
                transition:
                  'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                '&:hover': {
                  bgcolor: 'var(--paper)',
                  color: 'var(--ink-primary)',
                  transform: 'translate(2px, 2px)',
                  boxShadow: '2px 2px 0 var(--ink-text)',
                },
                '&:active': {
                  transform: 'translate(4px, 4px)',
                  boxShadow: 'none',
                },
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              onClick={() => scrollTo('contact')}
              sx={{
                borderColor: 'var(--ink-text)',
                color: 'var(--ink-text)',
                px: 4,
                py: 1.5,
                fontSize: '0.9rem',
                fontWeight: 700,
                borderRadius: 0,
                borderWidth: '2px',
                boxShadow: '4px 4px 0 var(--ink-secondary)',
                transition:
                  'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                '&:hover': {
                  borderColor: 'var(--ink-secondary)',
                  color: 'var(--ink-secondary)',
                  bgcolor: 'transparent',
                  borderWidth: '2px',
                  transform: 'translate(2px, 2px)',
                  boxShadow: '2px 2px 0 var(--ink-secondary)',
                },
              }}
            >
              Get In Touch
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
