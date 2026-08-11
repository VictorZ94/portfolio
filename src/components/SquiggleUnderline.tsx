import { motion } from 'motion/react';

interface SquiggleUnderlineProps {
  width?: number;
  height?: number;
  color?: string;
  delay?: number;
  variant?: 'underline' | 'wavy' | 'loop';
}

export function SquiggleUnderline({
  width = 220,
  height = 16,
  color = 'var(--ink-primary)',
  delay = 0,
  variant = 'underline',
}: SquiggleUnderlineProps) {
  const path =
    variant === 'wavy'
      ? 'M4 10 Q 14 2, 24 10 T 44 10 T 64 10 T 84 10 T 104 10 T 124 10 T 144 10 T 164 10 T 184 10 T 204 10 T 216 8'
      : variant === 'loop'
        ? 'M4 12 C 30 4, 60 16, 90 8 S 150 18, 180 6 S 220 14, 232 10'
        : 'M4 10 C 36 2, 72 16, 108 6 S 176 14, 216 8';

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.3, delay },
        }}
      />
    </svg>
  );
}
