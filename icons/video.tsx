import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function VideoICON(){

    const body = useAnimation();
    const wing = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        body.start({scale:[1,1.1,1], transition:{duration:0.4}})
        wing.start({x:[0,3,0], transition:{duration:0.4, ease:"easeInOut"}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-video">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={wing}
                d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4" />
            <motion.path
                animate={body}
                d="M3 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
        </motion.svg>
    );
}