import {motion, useAnimation} from "motion/react"
import { useRef } from "react";

export function CheckICON(){

    const outer = useAnimation();

    const isAnimating = useRef(false);
    
        const handleHoverStart = async() =>{
            isAnimating.current = true;
    
            outer.start({scale:[0.5,1], pathLength:[0,1]})
    
            isAnimating.current = false;
    }
    
    return(
        <motion.svg 
            onHoverStart={handleHoverStart} 
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path 
                animate={outer}
                d="M5 12l5 5l10 -10" />
        </motion.svg>
    );
}