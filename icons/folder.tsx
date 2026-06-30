import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function FolderICON(){

    const folder = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        folder.start({
            scaleY:[1,0.9,1.05,1],
            y:[0,1.5,-1.5,0],
            transition:{duration:0.4, ease:"easeInOut"}
        })

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-folder">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={folder}
                d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
        </motion.svg>
    );
}