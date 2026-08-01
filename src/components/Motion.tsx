"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";

type FadeUpProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function FadeUp({ delay = 0, children, ...props }: FadeUpProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
