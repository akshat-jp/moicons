import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function VolumeICON(){

    const speaker = useAnimation();
    const wave1 = useAnimation();
    const wave2 = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        await Promise.all([
            speaker.start({scale:[1,1.1,1], transition:{duration:0.3}}),
            wave1.start({x:[0,2,0], scale:[1,1.1,1], transition:{duration:0.3, delay:0.05}}),
            wave2.start({x:[0,3,0], scale:[1,1.1,1], transition:{duration:0.3, delay:0.1}}),
        ])

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-volume">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={wave1}
                d="M15 8a5 5 0 0 1 0 8" />
            <motion.path
                animate={wave2}
                d="M17.7 5a9 9 0 0 1 0 14" />
            <motion.path
                animate={speaker}
                d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
        </motion.svg>
    );
}