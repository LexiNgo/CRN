export const motionTokens = {
  duration: {
    fast: 0.18,
    base: 0.28,
    slow: 0.42,
  },
  ease: {
    standard: [0.22, 1, 0.36, 1] as const,
    exit: [0.4, 0, 1, 1] as const,
  },
  distance: {
    sm: 12,
    md: 20,
    lg: 32,
  },
  opacity: {
    hidden: 0,
    visible: 1,
  },
} as const;
