import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function MapPinICON(){

    const pin = useAnimation();
    const dot = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        pin.start({y:[0,-3,0], transition:{duration:0.4, ease:"easeOut"}})
        dot.start({y:[0,-3,0], scale:[0.8,1,0.8], transition:{duration:0.4, ease:"easeOut"}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={dot}
                d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <motion.path
                animate={pin}
                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
        </motion.svg>
    );
}