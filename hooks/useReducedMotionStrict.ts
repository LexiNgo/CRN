import { useReducedMotion } from 'framer-motion';

export const useReducedMotionStrict = (): boolean => {
  const shouldReduce = useReducedMotion();
  return Boolean(shouldReduce);
};
