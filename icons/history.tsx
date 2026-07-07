import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function HistoryICON(){

    const hands = useAnimation();
    const arc = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        arc.start({rotate:[0,360], transition:{duration:0.6, ease:"easeInOut"}})
        // hands.start({rotate:-360, transition:{duration:0.6, ease:"easeInOut"}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-history">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                // animate={hands}
                d="M12 8l0 4l2 2" />
            <motion.path
                animate={arc}
                d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
        </motion.svg>
    );
}