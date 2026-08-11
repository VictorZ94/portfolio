import { motion } from 'motion/react';

interface HandDrawnArrowProps {
  width?: number;
  height?: number;
  color?: string;
  delay?: number;
  rotation?: number;
  flip?: boolean;
}

export function HandDrawnArrow({
  width = 90,
  height = 50,
  color = 'var(--ink-primary)',
  delay = 0,
  rotation = 0,
  flip = false,
}: HandDrawnArrowProps) {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 90 50"
      fill="none"
      aria-hidden="true"
      style={{
        transform: `rotate(${rotation}deg) scaleX(${flip ? -1 : 1})`,
        overflow: 'visible',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay }}
    >
      <motion.path
        d="M6 38 C 18 18, 32 8, 48 14 S 70 6, 80 12"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d="M70 4 L 82 12 L 72 22"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: delay + 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.svg>
  );
}
