import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function EyeICON(){

    const pupil = useAnimation();
    const outline = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        outline.start({scaleY:[1,0.2,1], transition:{duration:0.4}})
        pupil.start({scale:[1,0,1], transition:{duration:0.4}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-eye">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={pupil}
                d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <motion.path
                animate={outline}
                d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
        </motion.svg>
    );
}