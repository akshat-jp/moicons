import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function UploadICON(){

    const tray = useAnimation();
    const arrowHead = useAnimation();
    const line = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        line.start({y:[0,-4,0], transition:{duration:0.4, delay:0.2}})
        arrowHead.start({y:[0,-4,0], transition:{duration:0.4, delay:0.2}})
        tray.start({scale:[1,1.1,1], transition:{duration:0.3, delay:0}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-upload">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={tray}
                d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
            <motion.path
                animate={arrowHead}
                d="M7 9l5 -5l5 5" />
            <motion.path
                animate={line}
                d="M12 4l0 12" />
        </motion.svg>
    );
}