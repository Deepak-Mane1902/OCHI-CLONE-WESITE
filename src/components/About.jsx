import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full   p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem inventore a error cupiditate hic cum harum rem molestiae temporibus quasi.</h1>
      <div className="w-full flex border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
        <h1 className="text-7xl">Our approach : </h1>
        <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">Learn more
        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div></button>
        </div>
        <div className="w-1/2  h-[60vh] rounded-xl bg-[#3c5d2445]"></div>
      </div>
    </div>
  )
}

export default About