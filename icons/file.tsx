import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function FileICON(){

    const corner = useAnimation();
    const body = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        body.start({scale:[1,1.2,1], transition:{duration:0.4}})
        corner.start({scale:[1,1.1,1], transition:{duration:0.4}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={corner}
                d="M14 3v4a1 1 0 0 0 1 1h4" />
            <motion.path
                animate={body}
                d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
        </motion.svg>
    );
}