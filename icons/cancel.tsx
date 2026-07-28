import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function CancelICON(){

    const circle = useAnimation();
    const slash = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        circle.start({scale:[1,1.1,1], transition:{duration:0.4}})
        slash.start({rotate:[0,20,-20,0], transition:{duration:0.4, ease:"easeInOut"}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-cancel">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={circle}
                d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <motion.path
                animate={slash}
                d="M18.364 5.636l-12.728 12.728" />
        </motion.svg>
    );
}