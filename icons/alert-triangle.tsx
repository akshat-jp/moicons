import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function AlertTriangleICON(){

    const outer = useAnimation();
    const abovesign = useAnimation();
    const belowsign = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async () => {
        isAnimating.current = true;

        outer.start({scale:[1,1.2,1], transition:{duration:0.5}})
        abovesign.start({scale:[1,1.2,1], y:[0,-1,0], opacity:[1,0,1,0,1],transition:{duration:0.5}})
        belowsign.start({scale:[1,1.2,1], opacity:[1,0,1,0,1],transition:{duration:0.5}})

        isAnimating.current = false;
    }

    return(
        <motion.svg 
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path 
                animate={outer}
                d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
            <motion.path 
                animate={abovesign}
                d="M12 9v4" />
            <motion.path 
                animate={belowsign}
                d="M12 16h.01" />
        </motion.svg>
    );
}