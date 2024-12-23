import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {

  return (
     <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
     <div className="text border-t-[1px] border-b-[1px] py-4 overflow-hidden border-zinc-500 flex whitespace-nowrap">
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:8}}  className='text-[15vw] leading-none font-["Founders_Grotesk_X-Condensed"] px-2 tracking-tighter font-semibold uppercase'>WE ARE Ochi .</motion.h1>
          
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:8}}  className='text-[15vw] leading-none font-["Founders_Grotesk_X-Condensed"] px-10 tracking-tighter font-semibold uppercase'> WE ARE Ochi .</motion.h1>
          
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:8}}  className='text-[15vw] leading-none font-["Founders_Grotesk_X-Condensed"] px-10 tracking-tighter font-semibold uppercase'> WE ARE Ochi .</motion.h1>
     </div>
    </div>
  )
}

export default Marquee