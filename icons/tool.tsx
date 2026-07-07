import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function ToolICON(){

    const svg = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        await svg.start({scale:[1,1.05], rotate:[0,-20,20,-10,10,0], transition:{duration:0.6, ease:"easeInOut"}})
        svg.set({rotate:0})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            animate={svg}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-tool">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
        </motion.svg>
    );
}