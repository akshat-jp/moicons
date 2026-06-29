import {motion, useAnimation} from "motion/react"
import { useRef } from "react";


export function AdjustmentsHorizontalICON(){

    const firstcircle = useAnimation();
    const secondcircle = useAnimation();
    const thirdcircle = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async () =>{
        isAnimating.current = true;

        firstcircle.start({x:[0,-7,0], transition:{duration:0.5}})
        secondcircle.start({x:[0,9,0], transition:{duration:0.5}})
        thirdcircle.start({x:[0,-10,0], transition:{duration:0.5}})

        isAnimating.current = false;
    }


    return(
        <motion.div onHoverStart={handleHoverStart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l8 0" />
            <path d="M16 6l4 0" />
            <path d="M4 12l2 0" />
            <path d="M10 12l10 0" />
            <path d="M4 18l11 0" />
            <path d="M19 18l1 0" />

            <motion.path 
                animate={firstcircle}
                d="M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />


            <motion.path 
                animate={secondcircle}
                d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />


            <motion.path 
                animate={thirdcircle}
                d="M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        </svg>
        </motion.div>
    );
} 