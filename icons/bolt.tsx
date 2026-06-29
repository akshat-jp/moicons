import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function BoltICON(){

    const outer = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        outer.start({x:[0,1,0,-1,0,1,0,-1,0,1,0],y:[-5,5,0] , transition:{duration:0.5}})

        isAnimating.current = false;
    }

    return(
        <motion.svg 
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bolt">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path 
                animate={outer}
                d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
        </motion.svg>
    );
}