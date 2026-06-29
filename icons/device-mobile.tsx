import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function DeviceMobileICON(){

    const outer = useAnimation();
    const top = useAnimation();
    const bottom = useAnimation();

    const isAnimating = useRef(false);
    
    const handleHoverStart = async() =>{
            isAnimating.current = true;
    
            outer.start({scale:[1,1.2,1], transition:{duration:0.3}})
            top.start({scale:[1,1.2,1], y:[0,-1,0], transition:{duration:0.3}})
            bottom.start({scale:[1,1.2,1], y:[0,1,0], transition:{duration:0.3}})
    
            isAnimating.current = false;
    }
    
    return(
        <motion.svg 
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path 
                animate={outer}
                d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14" />
            <motion.path 
                animate={top}
                d="M11 4h2" />
            <motion.path 
                animate={bottom}
                d="M12 17v.01" />
        </motion.svg>
    );
}