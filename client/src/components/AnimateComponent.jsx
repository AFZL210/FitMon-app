import React from 'react'
import {motion} from 'framer-motion'

const animations = {
    initial : {opacity:0, x:100},
    animate: {opacity:1, x:-1},
    exit: {opacity: 0, x:-100},
    
}

const AnimateComponent = ({children}) => {
  return (
    <motion.div style={{width:"100vw", height:"92vh"}} variants={animations} initial="initial" transition= {{duration:0.5}} animate="animate" exit="exit">
        {children}
    </motion.div>
    )
}

export default AnimateComponent