import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function PencilICON(){

    const pencil = useAnimation();
    const tip = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        pencil.start({rotate:[0,-5,5,-3,0], transition:{duration:0.5, ease:"easeInOut"}})
        tip.start({rotate:[0,-5,5,-3,0], scale:[1,0.9,1], transition:{duration:0.5, ease:"easeInOut"}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={pencil}
                d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <motion.path
                animate={tip}
                d="M13.5 6.5l4 4" />
        </motion.svg>
    );
}