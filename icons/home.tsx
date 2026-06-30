import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function HomeICON(){

    const roof = useAnimation();
    const walls = useAnimation();
    const door = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        roof.start({y:[0,-2,0], transition:{duration:0.4}})
        walls.start({scale:[1,1.1,1], transition:{duration:0.4}})
        door.start({scaleY:[1,1.1,1], transition:{duration:0.4}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-home">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={roof}
                d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <motion.path
                animate={walls}
                d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <motion.path
                animate={door}
                d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </motion.svg>
    );
}