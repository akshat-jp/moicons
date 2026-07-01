import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function PlusICON(){

    const vertical = useAnimation();
    const horizontal = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        vertical.start({scaleY:[1,1.2,1], transition:{duration:0.3}})
        horizontal.start({scaleX:[1,1.2,1], transition:{duration:0.3}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={vertical}
                d="M12 5l0 14" />
            <motion.path
                animate={horizontal}
                d="M5 12l14 0" />
        </motion.svg>
    );
}