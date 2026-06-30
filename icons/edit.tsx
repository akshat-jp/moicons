import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function EditICON(){

    const box = useAnimation();
    const pencil = useAnimation();
    const tip = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        pencil.start({x:[0,2,0], y:[0,-2,0], transition:{duration:0.4}})
        tip.start({x:[0,2,0], y:[0,-2,0], transition:{duration:0.4}})
        box.start({scale:[1,1.1,1], transition:{duration:0.4}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-edit">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={box}
                d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
            <motion.path
                animate={pencil}
                d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415" />
            <motion.path
                animate={tip}
                d="M16 5l3 3" />
        </motion.svg>
    );
}