import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function CopyICON(){

    const outer = useAnimation();
    const inner = useAnimation();

    const isAnimating = useRef(false);
    
    const handleHoverStart = async() =>{
            isAnimating.current = true;
    
            outer.start({x:[0,2,0], y:[0,2,0], transition:{duration:0.3}})
            inner.start({x:[0,-2,0], y:[0,-2,0], transition:{duration:0.3}})
            
    
            isAnimating.current = false;
    }
    
    return(
        <motion.svg 
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-copy">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path 
                animate={inner}
                d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
            <motion.path 
                animate={outer}
                d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
        </motion.svg>
    );
}