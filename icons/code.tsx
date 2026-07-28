import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function CodeICON(){

    const leftBracket = useAnimation();
    const rightBracket = useAnimation();
    const slash = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        leftBracket.start({x:[0,-3,0], transition:{duration:0.4, ease:"easeInOut"}})
        rightBracket.start({x:[0,3,0], transition:{duration:0.4, ease:"easeInOut"}})
        slash.start({rotate:[0,10,-10,0], transition:{duration:0.4, ease:"easeInOut"}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-code">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={leftBracket}
                d="M7 8l-4 4l4 4" />
            <motion.path
                animate={rightBracket}
                d="M17 8l4 4l-4 4" />
            <motion.path
                animate={slash}
                d="M14 4l-4 16" />
        </motion.svg>
    );
}