import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function UserPlusICON(){

    const head = useAnimation();
    const body = useAnimation();
    const plusH = useAnimation();
    const plusV = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        head.start({scale:[1,1.1,1], transition:{duration:0.3}})
        body.start({scale:[1,1], x:[-5,0], opacity:[0,1], transition:{duration:0.4}})
        plusH.start({scaleX:[1,1.3,1], transition:{duration:0.3, delay:0.05}})
        plusV.start({scaleY:[1,1.3,1], transition:{duration:0.3, delay:0.05}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-plus">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={head}
                d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <motion.path
                animate={plusH}
                d="M16 19h6" />
            <motion.path
                animate={plusV}
                d="M19 16v6" />
            <motion.path
                animate={body}
                d="M6 21v-2a4 4 0 0 1 4 -4h4" />
        </motion.svg>
    );
}