import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function ListICON(){

    const line1 = useAnimation();
    const line2 = useAnimation();
    const line3 = useAnimation();
    const dot1 = useAnimation();
    const dot2 = useAnimation();
    const dot3 = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        dot1.start({scale:[1,1.4,1], transition:{duration:0.4, delay:0}})
        line1.start({scaleX:[1,1.2,1], x:[0,1.5,0], transition:{duration:0.4, delay:0}})

        dot2.start({scale:[1,1.4,1], transition:{duration:0.4, delay:0}})
        line2.start({scaleX:[1,0.8,1] , x:[0,-1.5,0], transition:{duration:0.4, delay:0}})

        dot3.start({scale:[1,1.4,1], transition:{duration:0.4, delay:0}})
        line3.start({scaleX:[1,1.2,1] , x:[0,1.5,0], transition:{duration:0.4, delay:0}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-list">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={line1}
                d="M9 6l11 0" />
            <motion.path
                animate={line2}
                d="M9 12l11 0" />
            <motion.path
                animate={line3}
                d="M9 18l11 0" />
            <motion.path
                animate={dot1}
                d="M5 6l0 .01" />
            <motion.path
                animate={dot2}
                d="M5 12l0 .01" />
            <motion.path
                animate={dot3}
                d="M5 18l0 .01" />
        </motion.svg>
    );
}