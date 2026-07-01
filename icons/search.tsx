import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function SearchICON(){

    const circle = useAnimation();
    const handle = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        circle.start({scale:[1,1.2,1], transition:{duration:0.4}})
        handle.start({x:[0,1,0], y:[0,1,0], transition:{duration:0.4}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={circle}
                d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <motion.path
                animate={handle}
                d="M21 21l-6 -6" />
        </motion.svg>
    );
}