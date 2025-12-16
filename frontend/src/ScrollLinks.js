import React from 'react'
import { motion, useScroll } from "motion/react"
import Home from './Components/Home/Home'

   const { scrollYProgress } = useScroll()
const ScrollLinks = () => {
  return (
    <>
       <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 60,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "gray",
                    zIndex:1
                }}
            />
            <Home />
    </>
  )
}

export default ScrollLinks
