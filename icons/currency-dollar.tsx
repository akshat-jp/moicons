import { useAnimation, motion } from "motion/react";
import { useRef } from "react";

export function CurrencyDollarICON(){

    const symbol = useAnimation();
    const topStem = useAnimation();
    const bottomStem = useAnimation();

    const isAnimating = useRef(false);

    const handleHoverStart = async() =>{
        if(isAnimating.current) return;
        isAnimating.current = true;

        topStem.start({y:[0,-2,0], transition:{duration:0.3, ease:"easeInOut"}})
        bottomStem.start({y:[0,2,0], transition:{duration:0.3, ease:"easeInOut"}})
        symbol.start({scale:[1,1.08,1], transition:{duration:0.4, delay:0}})

        isAnimating.current = false;
    }

    return(
        <motion.svg
            onHoverStart={handleHoverStart}
            xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-currency-dollar">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={symbol}
                d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
            <motion.path
                animate={topStem}
                d="M12 3v3" />
            <motion.path
                animate={bottomStem}
                d="M12 18v3" />
        </motion.svg>
    );
}