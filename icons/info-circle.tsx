import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function InfoCircleICON(){

    const circle = useAnimation();
    const dot = useAnimation();
    const line = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        circle.start({scale:[1,1.1,1], transition:{duration:0.4}})
        dot.start({y:[0,-1,0], transition:{duration:0.3, delay:0.1}})
        line.start({scaleY:[1,1.1,1], transition:{duration:0.4}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={circle}
                d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <motion.path
                animate={dot}
                d="M12 9h.01" />
            <motion.path
                animate={line}
                d="M11 12h1v4h1" />
        </motion.svg>
    );
}