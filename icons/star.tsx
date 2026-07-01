import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function StarICON(){

    const star = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        await star.start({
            scale:[1,1.1,0.9,1.1,1],
            rotate:[0,15,-10,5,0],
            transition:{duration:0.5, ease:"easeInOut"}
        })

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-star">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={star}
                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" />
        </motion.svg>
    );
}