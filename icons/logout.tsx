import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function LogoutICON(){

    const door = useAnimation();
    const arrowLine = useAnimation();
    const arrowHead = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        door.start({scale:[1,1.1,1], transition:{duration:0.4}})
        arrowLine.start({x:[0,3,0], transition:{duration:0.4}})
        arrowHead.start({x:[0,3,0], transition:{duration:0.4}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-logout">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={door}
                d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <motion.path
                animate={arrowLine}
                d="M9 12h12l-3 -3" />
            <motion.path
                animate={arrowHead}
                d="M18 15l3 -3" />
        </motion.svg>
    );
}