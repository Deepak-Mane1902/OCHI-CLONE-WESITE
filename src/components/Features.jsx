import { motion, useAnimate, useAnimation } from 'framer-motion'
import React from 'react'

const Features = () => {
     const all = [useAnimation(),useAnimation()]
     const handleHover =(index)=>{
          all[index].start({y:"0%"})
     }
     const handleHoverEnd =(index)=>{
          all[index].start({y:"100%"})
     }
     
  return (
    <div className="w-full py-20 bg-zinc-800">
     <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
     <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">Features</h1>
     </div>
     <div className="px-20 ">
     <div className="cards w-full flex mt-10 gap-10">
               <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardContainer w-1/2 relative h-[70vh] ">
               <div className='card1 absolute z-[9] text-7xl text-[#CDEA68] left-full top-1/2 -translate-x-1/2 -translate-y-1/2  font-semibold tracking-tighter flex overflow-hidden font-["Founders_Grotesk_X-Condensed"] '>
               {"FYDE ".split("").map((item,index)=>{
                    return (
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={all[0]}
                        transition={{ease:[0.22,1,0.36,1], delay:index*0.05}}
                        key={index}
                            className="inline-block"
                      >
                        {item}
                      </motion.span>
                    );
               })}</div>
               <div className="card w-full h-full rounded-xl overflow-hidden ">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="container-1-image" />
               </div>
               </motion.div>
               <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardContainer w-1/2 relative h-[70vh]  ">
               <div  className='card2 flex overflow-hidden absolute z-[9] text-7xl text-[#CDEA68] right-full top-1/2 translate-x-1/2 -translate-y-1/2  font-semibold tracking-tighter font-["Founders_Grotesk_X-Condensed"] '>
               {"VISE".split("").map((item,index)=>{
                    return                       <motion.span
                    initial={{ y: "100%" }}
                    animate={all[1]}
                    transition={{ease:[0.22,1,0.36,1], delay:index*0.05}}
                    key={index}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
               })}
               </div>
               <div className="card w-full h-full rounded-xl overflow-hidden bg-zinc-100">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="container-1-image" />
               </div>
               </motion.div>
          </div>
     </div>
    </div>
  )
}

export default Features