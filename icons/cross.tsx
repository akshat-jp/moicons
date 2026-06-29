import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function CrossICON(){

    const outer = useAnimation();

    const isAnimating = useRef(false);
    
    const handleHoverStart = async() =>{
            isAnimating.current = true;
    
            outer.start({rotate:[0,140,0], transition:{duration:0.5}})
    
            isAnimating.current = false;
    }
    
    return(
        <motion.svg 
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path 
                animate={outer}
                d="M18 6l-12 12" />
            <motion.path 
                animate={outer}
                d="M6 6l12 12" />
        </motion.svg>
    );
}