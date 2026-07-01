import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function ShoppingCartICON(){

    const wheel1 = useAnimation();
    const wheel2 = useAnimation();
    const body = useAnimation();
    const items = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        body.start({x:[0,2,0], transition:{duration:0.4}})
        items.start({x:[0,2,0], transition:{duration:0.4}})
        wheel1.start({scale:[0.8,1,0.8],x:[0,2,0], transition:{duration:0.3}})
        wheel2.start({scale:[0.8,1,0.8],x:[0,2,0], transition:{duration:0.3}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={wheel1}
                d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <motion.path
                animate={wheel2}
                d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <motion.path
                animate={body}
                d="M17 17h-11v-14h-2" />
            <motion.path
                animate={items}
                d="M6 5l14 1l-1 7h-13" />
        </motion.svg>
    );
}