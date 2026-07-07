import { useAnimation, motion, easeInOut } from "motion/react";
import { useRef } from "react";

export function CategoryICON(){

    const topLeft = useAnimation();
    const topRight = useAnimation();
    const bottomLeft = useAnimation();
    const bottomRight = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        topLeft.start({x:[0,10,10,0], transition:{ease:easeInOut,duration:0.5, delay:0}})
        topRight.start({y:[0,10,10,0], transition:{ease:easeInOut,duration:0.5, delay:0}})
        bottomLeft.start({y:[0,-10,-10,0], transition:{ease:easeInOut,duration:0.5, delay:0}})
        bottomRight.start({x:[0,-10,-10,0], transition:{ease:easeInOut,duration:0.5, delay:0}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-category">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={topLeft}
                d="M4 4h6v6h-6l0 -6" />
            <motion.path
                animate={topRight}
                d="M14 4h6v6h-6l0 -6" />
            <motion.path
                animate={bottomLeft}
                d="M4 14h6v6h-6l0 -6" />
            <motion.path
                animate={bottomRight}
                d="M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        </motion.svg>
    );
}