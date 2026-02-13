import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotionStrict } from '../../hooks/useReducedMotionStrict';
import { pageEnterExit } from '../../lib/motion/presets';

interface PageTransitionProps {
  children: React.ReactNode;
  routeKey: string;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  routeKey,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotionStrict();

  if (shouldReduceMotion) {
    return (
      <div key={routeKey} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      key={routeKey}
      className={className}
      variants={pageEnterExit}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
