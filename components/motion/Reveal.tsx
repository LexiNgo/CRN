import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useReducedMotionStrict } from '../../hooks/useReducedMotionStrict';
import { fadeIn, fadeUp } from '../../lib/motion/presets';
import { motionTokens } from '../../lib/motion/tokens';

type RevealTag =
  | 'article'
  | 'aside'
  | 'div'
  | 'footer'
  | 'header'
  | 'main'
  | 'section';
type Direction = 'up' | 'down' | 'left' | 'right';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: Direction;
  once?: boolean;
  as?: RevealTag;
  inViewAmount?: number;
}

const motionElements: Record<RevealTag, React.ComponentType<any>> = {
  article: motion.article,
  aside: motion.aside,
  div: motion.div,
  footer: motion.footer,
  header: motion.header,
  main: motion.main,
  section: motion.section,
};

const getVariants = (
  direction: Direction,
  distance: number,
  delay: number,
  duration: number
): Variants => {
  if (distance === 0) {
    return fadeIn(delay, duration);
  }

  if (direction === 'up') {
    return fadeUp(distance, delay, duration);
  }

  if (direction === 'down') {
    return {
      hidden: { opacity: motionTokens.opacity.hidden, y: -distance },
      visible: {
        opacity: motionTokens.opacity.visible,
        y: 0,
        transition: { delay, duration, ease: motionTokens.ease.standard },
      },
    };
  }

  if (direction === 'left') {
    return {
      hidden: { opacity: motionTokens.opacity.hidden, x: distance },
      visible: {
        opacity: motionTokens.opacity.visible,
        x: 0,
        transition: { delay, duration, ease: motionTokens.ease.standard },
      },
    };
  }

  return {
    hidden: { opacity: motionTokens.opacity.hidden, x: -distance },
    visible: {
      opacity: motionTokens.opacity.visible,
      x: 0,
      transition: { delay, duration, ease: motionTokens.ease.standard },
    },
  };
};

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = motionTokens.duration.base,
  distance = motionTokens.distance.md,
  direction = 'up',
  once = true,
  as = 'div',
  inViewAmount = 0.2,
}) => {
  const shouldReduceMotion = useReducedMotionStrict();

  if (shouldReduceMotion) {
    return React.createElement(as, { className }, children);
  }

  const MotionComponent = motionElements[as];
  const variants = getVariants(direction, distance, delay, duration);

  return (
    <MotionComponent
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: inViewAmount }}
    >
      {children}
    </MotionComponent>
  );
};
