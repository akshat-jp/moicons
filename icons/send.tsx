import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function SendICON(){

    const line = useAnimation();
    const body = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        line.start({x:[-1,2,0], y:[1,-2,0],scale:[1,1.09,1], transition:{duration:0.4, ease:"easeInOut"}})
        body.start({x:[-1,2,0], y:[1,-2,0],scale:[1,1.09,1], transition:{duration:0.4, ease:"easeInOut"}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-send">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={line}
                d="M10 14l11 -11" />
            <motion.path
                animate={body}
                d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
        </motion.svg>
    );
}