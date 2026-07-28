import { motion, type Variants } from "motion/react";

export function PinICON(){

    const line: Variants = {
        initial: {
            y: 0,
            x: 0
        },
        hover: {
            y: 2,
            x: -2,
            transition: { duration: 0.4, ease: "easeInOut" }
        }
    }

    return(
        <motion.svg
            initial="initial"
            whileHover="hover"
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-pin">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                variants={line}
                d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
            <motion.path
                variants={line}
                d="M9 15l-4.5 4.5" />
            <motion.path
                variants={line}
                d="M14.5 4l5.5 5.5" />
        </motion.svg>
    );
}