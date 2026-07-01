import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function WorldICON(){

    const stroke = useAnimation();


    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        
        isAnimating.current = true;

        stroke.start({pathLength:[0,1], transition:{duration:0.5}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-world">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <motion.path 
                animate={stroke}
                d="M3.6 9h16.8" />
            <motion.path 
                animate={stroke}
                d="M3.6 15h16.8" />
            <motion.path 
                animate={stroke}
                d="M11.5 3a17 17 0 0 0 0 18" />
            <motion.path 
                animate={stroke}
                d="M12.5 3a17 17 0 0 1 0 18" />
        </motion.svg>
    );
}