import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function LinkICON(){

    const line = useAnimation();
    const topLink = useAnimation();
    const bottomLink = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        line.start({scale:[1,1.05,1], transition:{duration:0.4}})
        topLink.start({x:[0,2,0], y:[0,-2,0], transition:{duration:0.4}})
        bottomLink.start({x:[0,-2,0], y:[0,2,0], transition:{duration:0.4}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-link">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={line}
                d="M9 15l6 -6" />
            <motion.path
                animate={topLink}
                d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
            <motion.path
                animate={bottomLink}
                d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
        </motion.svg>
    );
}