import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function MessageCircleICON(){

    const bubble = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        bubble.start({
            scale:[1,1.15,0.95,1.05,1],
            y:[0,-2,0],
            transition:{duration:0.5, ease:"easeInOut"}
        })

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-message-circle">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={bubble}
                d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
        </motion.svg>
    );
}