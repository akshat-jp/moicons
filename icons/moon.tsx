import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function MoonICON(){

    const moon = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        isAnimating.current = true;

        moon.start({
            rotate:[0,-15,5,-5,0],
            scale:[1,1.2,1],
            transition:{duration:0.6, ease:"easeInOut"}
        })

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-moon">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={moon}
                d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" />
        </motion.svg>
    );
}