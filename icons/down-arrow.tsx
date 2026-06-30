import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function ArrowDownICON(){

    const line = useAnimation();
    const leftHead = useAnimation();
    const rightHead = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        line.start({y:[0,3,0], transition:{duration:0.4}})
        leftHead.start({y:[0,3,0],x:[0,-0.5,0], scale:[1,1.2,1], transition:{duration:0.4}})
        rightHead.start({y:[0,3,0],x:[0,0.5,0] ,scale:[1,1.2,1] , transition:{duration:0.4}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-down">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={line}
                d="M12 5l0 14" />
            <motion.path
                animate={rightHead}
                d="M16 15l-4 4" />
            <motion.path
                animate={leftHead}
                d="M8 15l4 4" />
        </motion.svg>
    );
}