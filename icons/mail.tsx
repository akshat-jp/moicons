import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function MailICON(){

    const envelope = useAnimation();
    const flap = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        envelope.start({scale:[1,1.15,1], transition:{duration:0.4}})
        flap.start({y:[0,-1,0], transition:{duration:0.4}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={envelope}
                d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
            <motion.path
                animate={flap}
                d="M3 7l9 6l9 -6" />
        </motion.svg>
    );
}