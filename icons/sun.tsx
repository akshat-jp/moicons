import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function SunICON(){

    const stroke = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        stroke.start({scale:[1,1.1,1], rotate:[0,3,0,-3,0,3,0,-3,0], transition:{duration:0.5}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-sun">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <motion.path 
                animate={stroke}
                d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </motion.svg>
    );
}