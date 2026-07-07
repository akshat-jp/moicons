import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function XboxXICON(){

    const circle = useAnimation();
    const line1 = useAnimation();
    const line2 = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        circle.start({scale:[1,1.1,1], transition:{duration:0.4}})
        line1.start({scale:[0.8,1], rotate:[0], transition:{duration:0.3, delay:0.1}})
        line2.start({scale:[0.8,1], rotate:[0], transition:{duration:0.3, delay:0.1}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-xbox-x">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={circle}
                d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9" />
            <motion.path
                animate={line1}
                d="M9 8l6 8" />
            <motion.path
                animate={line2}
                d="M15 8l-6 8" />
        </motion.svg>
    );
}