import { motion } from "motion/react";

const lineone = {
  initial: { rotate:0,
    y:0
   },
  hover: {
    y:6,
    rotate:45,
    transition: { duration: 0.3 },
  },
};

const linetwo = {
  initial: { opacity: 1 },
  hover: {
    opacity : 0,
    transition: { duration: 0.3 },
  },
};

const linethree = {
  initial: { rotate: 0,
    y:0
   },
  hover: {
    y:-6,
    rotate: -45,
    transition: { duration: 0.3 },
  },
};

export function MenuICON() {
  return (
    <motion.svg
      initial="initial"
      whileHover="hover"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="-8 -8 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        variants={lineone}
        d="M4 6h16"
      />

      <motion.path 
        variants={linetwo}
        d="M4 12h16" />
      <motion.path 
        variants={linethree}
        d="M4 18h16" />
    </motion.svg>
  );
}