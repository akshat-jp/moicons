import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function ShareICON(){

    const leftDot = useAnimation();
    const topDot = useAnimation();
    const bottomDot = useAnimation();
    const lineTop = useAnimation();
    const lineBottom = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        leftDot.start({scale:[1,1.1,1], transition:{duration:0.5, delay:0}})
        lineTop.start({scale:[1,0.8,1], transition:{duration:0.5, delay:0}})
        lineBottom.start({x:[0,1,0], y:[0,1,0], transition:{duration:0.5, delay:0}})
        topDot.start({x:[0,-1,0], y:[0,1,0],scale:[1,0.9,1], transition:{duration:0.5, delay:0}})
        bottomDot.start({x:[0,2,0], y:[0,2,0],scale:[1,1.3,1], transition:{duration:0.5, delay:0}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-share">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={leftDot}
                d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <motion.path
                animate={topDot}
                d="M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <motion.path
                animate={bottomDot}
                d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <motion.path
                animate={lineTop}
                d="M8.7 10.7l6.6 -3.4" />
            <motion.path
                animate={lineBottom}
                d="M8.7 13.3l6.6 3.4" />
        </motion.svg>
    );
}