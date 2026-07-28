import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function BookmarkICON(){

    const bookmark = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        await bookmark.start({
            y:[0,-3,0],
            scale:[1,1.08,1],
            transition:{duration:0.4, ease:"easeInOut"}
        })

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bookmark">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={bookmark}
                d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4" />
        </motion.svg>
    );
}