import { motion, useAnimation } from "motion/react"
import { useRef } from "react"

export function AlarmICON() {
  const rightbar = useAnimation()
  const leftbar = useAnimation()
  const circle = useAnimation()
  const hand = useAnimation()
  
  const isAnimating = useRef(false)

  const handleHoverStart = async () => {
    isAnimating.current = true

    

    rightbar.start({scale:[1,1.2,1], y:[0,-3,0], transition:{duration:0.5}, x:[0,1,0,-1,0,1,0,-1,0,1,0,-1,0]})
    leftbar.start({scale:[1,1.2,1], y:[0,-3,0], transition:{duration:0.5}, x:[0,1,0,-1,0,1,0,-1,0,1,0,-1,0]})
    circle.start({scale:[1,1.2,1], transition:{duration:0.5}, x:[0,1,0,-1,0,1,0,-1,0,1,0,-1,0]})
    hand.start({scale:[1,1.2,1], transition:{duration:0.5}, x:[0,1,0,-1,0,1,0,-1,0,1,0,-1,0]})
    

    isAnimating.current = false
  }


    return(
        <motion.div onHoverStart={handleHoverStart}>
            <motion.svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-8 -8 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-alarm">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <motion.path 
                    animate={circle}
                    d="M5 13a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <motion.path 
                    animate={hand}
                    d="M12 10l0 3l2 0" />
                <motion.path 
                    animate={leftbar}
                    d="M7 4l-2.75 2" />
                <motion.path
                    animate={rightbar}
                    d="M17 4l2.75 2" />
            </motion.svg>
        </motion.div>
    );
}


