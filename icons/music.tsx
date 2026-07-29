import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function MusicICON(){

    const noteLeft = useAnimation();
    const noteRight = useAnimation();
    const stem = useAnimation();
    const bar = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        await Promise.all([
            noteLeft.start({y:[0,-3,0], transition:{duration:0.4, delay:0}}),
            noteRight.start({y:[0,-3,0], transition:{duration:0.4, delay:0}}),
            stem.start({y:[0,-4,0], transition:{duration:0.4}}),
            bar.start({y:[0,-3,0], transition:{duration:0.4, delay:0}}),
        ])

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-music">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={noteLeft}
                d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <motion.path
                animate={noteRight}
                d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <motion.path
                animate={stem}
                d="M9 17v-13h10v13" />
            <motion.path
                animate={bar}
                d="M9 8h10" />
        </motion.svg>
    );
}