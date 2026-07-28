import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function FlagICON(){

    const flag = useAnimation();
    const pole = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        pole.start({x:[0,0.4,0], transition:{duration:0.5}})
        flag.start({
            x:[0,2,0],
            scaleX:[1,1.2,1],
            transition:{duration:0.5}
        })

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-flag">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={flag}
                d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9" />
            <motion.path
                animate={pole}
                d="M5 21v-7" />
        </motion.svg>
    );
}