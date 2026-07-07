import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function TrendingDownICON(){

    const line = useAnimation();
    const arrow = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        line.start({pathLength:[0,1], transition:{duration:0.4, ease:"easeInOut"}})
        arrow.start({scale:[1,1.1,1],x:[0,1,0],y:[0,1,0], transition:{duration:0.4, ease:"easeInOut", delay:0.3}})

        isAnimating.current = false;
    }

    return(
        <motion.svg 
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trending-down">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path 
                animate={line}
                d="M3 7l6 6l4 -4l8 8" />
            <motion.path 
                animate={arrow}
                d="M21 10l0 7l-7 0" />
        </motion.svg>
    );
}