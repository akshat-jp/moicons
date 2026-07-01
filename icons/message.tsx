import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function MessageICON(){

    const bubble = useAnimation();
    const line1 = useAnimation();
    const line2 = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        bubble.start({scale:[1,1.1,1], y:[0,-2,0], transition:{duration:0.4}})
        line1.start({scaleX:[1,1.4,1], y:[0,-2,0], transition:{duration:0.4, delay:0}})
        line2.start({scaleX:[1,1.4,1], y:[0,-2,0], transition:{duration:0.4, delay:0}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-message">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={line1}
                d="M8 9h8" />
            <motion.path
                animate={line2}
                d="M8 13h6" />
            <motion.path
                animate={bubble}
                d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" />
        </motion.svg>
    );
}