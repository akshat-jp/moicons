import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function PhoneICON(){

    const phone = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        phone.start({
            rotate:[0,-10,10,-10,10,-5,0],
            transition:{duration:0.5, ease:"easeInOut"}
        })

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={phone}
                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
        </motion.svg>
    );
}