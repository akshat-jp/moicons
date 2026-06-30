import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function FileDescriptionICON(){

    const corner = useAnimation();
    const body = useAnimation();
    const line1 = useAnimation();
    const line2 = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        body.start({scale:[1,1.2,1], transition:{duration:0.4}})
        corner.start({scale:[1,1.1,1], transition:{duration:0.4}})
        line1.start({scaleX:[0,1], transition:{duration:0.25, delay:0.1}})
        line2.start({scaleX:[0,1], transition:{duration:0.25, delay:0.25}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-description">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={corner}
                d="M14 3v4a1 1 0 0 0 1 1h4" />
            <motion.path
                animate={body}
                d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
            <motion.path
                animate={line2}
                d="M9 17h6" />
            <motion.path
                animate={line1}
                d="M9 13h6" />
        </motion.svg>
    );
}