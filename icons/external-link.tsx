import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function ExternalLinkICON(){

    const box = useAnimation();
    const arrow = useAnimation();
    const arrowTip = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        box.start({scale:[1,1.1,1], transition:{duration:0.4}})
        arrow.start({scale:[1,1.1,1], x:[0,2,0], y:[0,-2,0], transition:{duration:0.4}})
        arrowTip.start({scale:[1,1.1,1], x:[0,2,0], y:[0,-2,0], transition:{duration:0.4}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-external-link">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={box}
                d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
            <motion.path
                animate={arrow}
                d="M11 13l9 -9" />
            <motion.path
                animate={arrowTip}
                d="M15 4h5v5" />
        </motion.svg>
    );
}