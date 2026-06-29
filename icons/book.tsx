import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function BookIcon (){

    const outer = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        outer.start({scale:[0,1.1,1],transition:{duration:0.5}})

        isAnimating.current = false;
    }

    return(
        <motion.svg 
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-book">
            <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path animate={outer} d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <motion.path animate={outer} d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <motion.path animate={outer} d="M3 6l0 13" />
            <motion.path animate={outer} d="M12 6l0 13" />
            <motion.path animate={outer} d="M21 6l0 13" />
        </motion.svg>
    );
}