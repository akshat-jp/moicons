import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function HeartICON(){

    const heart = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        heart.start({
            scale:[1,1.2,0.9,1.15,1],
            transition:{duration:0.5, ease:"easeInOut"}
        })

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={heart}
                d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </motion.svg>
    );
}