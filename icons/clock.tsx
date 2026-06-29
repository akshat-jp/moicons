import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function ClockICON(){

    const outer = useAnimation();
    const hand = useAnimation();

    const isAnimating = useRef(false);
    
    const handleHoverStart = async() =>{
            isAnimating.current = true;
    
            outer.start({scale:[0.8,1.2,1], transition:{duration:0.4}})
            hand.start({rotate:[0,360], transition:{duration:0.4}})            
    
            isAnimating.current = false;
    }
    
    return(
        <motion.svg 
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clock">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path 
                animate={outer}
                d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <motion.path 
                animate={hand}
                d="M12 7v5l3 3" />
        </motion.svg>
    );
}