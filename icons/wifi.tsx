import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function WifiICON(){

    const dot = useAnimation();
    const arc1 = useAnimation();
    const arc2 = useAnimation();
    const arc3 = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        dot.start({scale:[1,1.5,1], transition:{duration:0.3, delay:0}})
        arc1.start({scale:[1,1.1,1], y:[0,-1,0], transition:{duration:0.3, delay:0.05}})
        arc2.start({scale:[1,1.1,1], y:[0,-1,0], transition:{duration:0.3, delay:0.1}})
        arc3.start({scale:[1,1.1,1], y:[0,-1,0], transition:{duration:0.3, delay:0.15}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-wifi">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={dot}
                d="M12 18l.01 0" />
            <motion.path
                animate={arc1}
                d="M9.172 15.172a4 4 0 0 1 5.656 0" />
            <motion.path
                animate={arc2}
                d="M6.343 12.343a8 8 0 0 1 11.314 0" />
            <motion.path
                animate={arc3}
                d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
        </motion.svg>
    );
}