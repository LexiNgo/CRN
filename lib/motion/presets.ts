import { type Variants } from 'framer-motion';
import { motionTokens } from './tokens';

export const fadeIn = (
  delay = 0,
  duration = motionTokens.duration.base
): Variants => ({
  hidden: { opacity: motionTokens.opacity.hidden },
  visible: {
    opacity: motionTokens.opacity.visible,
    transition: {
      delay,
      duration,
      ease: motionTokens.ease.standard,
    },
  },
});

export const fadeUp = (
  distance = motionTokens.distance.md,
  delay = 0,
  duration = motionTokens.duration.base
): Variants => ({
  hidden: {
    opacity: motionTokens.opacity.hidden,
    y: distance,
  },
  visible: {
    opacity: motionTokens.opacity.visible,
    y: 0,
    transition: {
      delay,
      duration,
      ease: motionTokens.ease.standard,
    },
  },
});

export const scaleIn = (
  delay = 0,
  duration = motionTokens.duration.base
): Variants => ({
  hidden: {
    opacity: motionTokens.opacity.hidden,
    scale: 0.98,
  },
  visible: {
    opacity: motionTokens.opacity.visible,
    scale: 1,
    transition: {
      delay,
      duration,
      ease: motionTokens.ease.standard,
    },
  },
});

export const pageEnterExit: Variants = {
  initial: {
    opacity: motionTokens.opacity.hidden,
    y: 12,
  },
  animate: {
    opacity: motionTokens.opacity.visible,
    y: 0,
    transition: {
      duration: motionTokens.duration.base,
      ease: motionTokens.ease.standard,
    },
  },
  exit: {
    opacity: motionTokens.opacity.hidden,
    y: -8,
    transition: {
      duration: motionTokens.duration.fast,
      ease: motionTokens.ease.exit,
    },
  },
};

export const staggerContainer = (
  stagger = 0.08,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: motionTokens.opacity.hidden },
  visible: {
    opacity: motionTokens.opacity.visible,
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const staggerItem: Variants = fadeUp(
  motionTokens.distance.sm,
  0,
  motionTokens.duration.base
);
