import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function UserICON(){

    const head = useAnimation();
    const body = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        head.start({pathLength:[0,1], transition:{duration:0.5}})
        body.start({scaleX:[1,1.2,1], y:[0,1,0], transition:{duration:0.5, }})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={head}
                d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <motion.path
                animate={body}
                d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </motion.svg>
    );
}