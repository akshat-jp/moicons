import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function EyeOffICON(){

    const pupil = useAnimation();
    const eyeLeft = useAnimation();
    const eyeRight = useAnimation();
    const slash = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        slash.start({pathLength:[0,1], opacity:[0,1],x:[0,-1,0],y:[0,-1,0], transition:{duration:0.5}})
        pupil.start({scale:[1,1.1,1], transition:{duration:0.3, delay:0.1}})
        // eyeLeft.start({x:[0,-0.5,0], transition:{duration:0.4}})
        // eyeRight.start({x:[0,0.5,0], transition:{duration:0.4}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={pupil}
                d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
            <motion.path
                animate={eyeLeft}
                d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
            <motion.path
                animate={eyeRight}
                d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
            <motion.path
                animate={slash}
                d="M3 3l18 18" />
        </motion.svg>
    );
}