import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function DotsHorizontalICONS(){

    const dot1 = useAnimation();
    const dot2 = useAnimation();
    const dot3 = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        dot1.start({y:[0,-3,0], transition:{duration:0.3, delay:0}})
        dot2.start({y:[0,-3,0], transition:{duration:0.3, delay:0.1}})
        dot3.start({y:[0,-3,0], transition:{duration:0.3, delay:0.2}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-dots">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={dot1}
                d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <motion.path
                animate={dot2}
                d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <motion.path
                animate={dot3}
                d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </motion.svg>
    );
}