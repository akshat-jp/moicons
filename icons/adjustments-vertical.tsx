import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function AdjustmentsVerticalICON(){

    const firstcircle = useAnimation();
    const secondcircle = useAnimation();
    const thirdcircle = useAnimation();


    const isAnimating = useRef(false);

    const handleHoverStart = async () =>{
        isAnimating.current = true;

        firstcircle.start({y:[0,7,0], transition:{duration:0.5}})
        secondcircle.start({y:[0,-9,0], transition:{duration:0.5}})
        thirdcircle.start({y:[0,10,0], transition:{duration:0.5}})

        isAnimating.current = false;
    }
    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path d="M6 4v4" />
            <motion.path d="M6 12v8" />
            <motion.path d="M12 4v10" />
            <motion.path d="M12 18v2" />

            <motion.path d="M18 4v1" />
            <motion.path d="M18 9v11" />

            <motion.path animate={firstcircle} d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <motion.path animate={secondcircle} d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <motion.path animate={thirdcircle} d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        </motion.svg>
    );
}