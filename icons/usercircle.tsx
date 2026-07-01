import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function UserCircleICON(){

    const circle = useAnimation();
    const head = useAnimation();
    const body = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        circle.start({scale:[1,1.2,1], transition:{duration:0.4}})
        head.start({scale:[1,1.15,1], transition:{duration:0.3, delay:0.}})
        body.start({scale:[1,1.05,1], y:[0,1,0], transition:{duration:0.3, delay:0.}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={circle}
                d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <motion.path
                animate={head}
                d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <motion.path
                animate={body}
                d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
        </motion.svg>
    );
}