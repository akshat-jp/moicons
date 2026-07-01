import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function TrashICON(){

    const lid = useAnimation();
    const body = useAnimation();
    const line1 = useAnimation();
    const line2 = useAnimation();
    const handle = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        lid.start({y:[0,-2,0], rotate:[0,-10,0], transition:{duration:0.4}})
        handle.start({y:[0,-2,0], rotate:[0,-10,0], transition:{duration:0.4}})
        body.start({scale:[1,1.05,1], transition:{duration:0.4}})
        line1.start({scaleY:[1,0.8,1], transition:{duration:0.4, delay:0.1}})
        line2.start({scaleY:[1,0.8,1], transition:{duration:0.4, delay:0.1}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={lid}
                d="M4 7l16 0" />
            <motion.path
                animate={line1}
                d="M10 11l0 6" />
            <motion.path
                animate={line2}
                d="M14 11l0 6" />
            <motion.path
                animate={body}
                d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <motion.path
                animate={handle}
                d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </motion.svg>
    );
}