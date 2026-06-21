"use client"
import { motion, useReducedMotion } from "framer-motion"

export function AmbientOrbs() {
  const reduced = useReducedMotion()
  const anim = (dur: number, delay: number) =>
    reduced ? {} : { animate: { y: [0, -30, 0], scale: [1, 1.05, 1] }, transition: { duration: dur, repeat: Infinity, ease: "easeInOut", delay } }

  return (
    <>
      <motion.div className="fixed top-0 left-0 w-[600px] h-[600px] bg-violet/20 rounded-full blur-[120px] pointer-events-none z-0" {...anim(8, 0)} />
      <motion.div className="fixed top-1/4 right-0 w-[500px] h-[500px] bg-cyan/15 rounded-full blur-[120px] pointer-events-none z-0" {...anim(10, 1)} />
      <motion.div className="fixed bottom-0 left-1/4 w-[400px] h-[400px] bg-blue/15 rounded-full blur-[120px] pointer-events-none z-0" {...anim(9, 2)} />
    </>
  )
}
