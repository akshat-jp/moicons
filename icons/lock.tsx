import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function LockICON(){

    const body = useAnimation();
    const keyhole = useAnimation();
    const shackle = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        shackle.start({y:[0,-2,0], transition:{duration:0.4}})
        body.start({scale:[1,1.05,1], transition:{duration:0.4}})
        keyhole.start({scale:[1,1.05,1], transition:{duration:0.3, delay:0}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-lock">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={body}
                d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6" />
            <motion.path
                animate={keyhole}
                d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
            <motion.path
                animate={shackle}
                d="M8 11v-4a4 4 0 1 1 8 0v4" />
        </motion.svg>
    );
}