import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function ArrowLeftICON(){

    const line = useAnimation();
    const leftHead = useAnimation();
    const rightHead = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        line.start({x:[0,-3,0], transition:{duration:0.4}})
        leftHead.start({x:[0,-3,0],y:[0,0.5,0], scale:[1,1.2,1], transition:{duration:0.4}})
        rightHead.start({x:[0,-3,0],y:[0,-0.5,0] ,scale:[1,1.2,1] , transition:{duration:0.4}})

        isAnimating.current = false;
    }

    return(
        <motion.svg 
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path 
                animate={line}
                d="M5 12l14 0" />
            <motion.path 
                animate={leftHead}
                d="M5 12l4 4" />
            <motion.path 
                animate={rightHead}
                d="M5 12l4 -4" />
        </motion.svg>
    );
}