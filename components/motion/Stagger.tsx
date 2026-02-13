import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotionStrict } from '../../hooks/useReducedMotionStrict';
import { staggerContainer, staggerItem } from '../../lib/motion/presets';

type StaggerTag = 'div' | 'section' | 'ul';

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  as?: StaggerTag;
  once?: boolean;
  inViewAmount?: number;
}

const motionElements: Record<StaggerTag, React.ComponentType<any>> = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
};

export const Stagger: React.FC<StaggerProps> = ({
  children,
  className = '',
  stagger = 0.08,
  delayChildren = 0,
  as = 'div',
  once = true,
  inViewAmount = 0.2,
}) => {
  const shouldReduceMotion = useReducedMotionStrict();

  if (shouldReduceMotion) {
    return React.createElement(as, { className }, children);
  }

  const MotionComponent = motionElements[as];

  return (
    <MotionComponent
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: inViewAmount }}
    >
      {React.Children.map(children, (child, index) => {
        if (child === null || child === undefined || typeof child === 'boolean') {
          return child;
        }

        const key = React.isValidElement(child) && child.key !== null ? child.key : index;
        return (
          <motion.div key={key} variants={staggerItem}>
            {child}
          </motion.div>
        );
      })}
    </MotionComponent>
  );
};
