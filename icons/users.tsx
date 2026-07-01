import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function UsersICON(){


const head2 = {
  initial: { 
    x:0
   },
  hover: {
    x:[-6,0],
    
    transition: { duration: 0.3 },
  },
};

const body2 = {
  initial: { 
    x:0
   },
  hover: {
    x:[-6,0],
    
    transition: { duration: 0.3 },
  },
};
    
    return(
        <motion.svg
            initial="initial"
            whileHover="hover"
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                
                d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <motion.path
                
                d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <motion.path
                variants={head2}
                d="M16 3.13a4 4 0 0 1 0 7.75" />
            <motion.path
                variants={body2}
                d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </motion.svg>
    );
}