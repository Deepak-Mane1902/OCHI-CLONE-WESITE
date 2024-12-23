import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";





const Header = () => {

  return (

    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen text-white bg-zinc-900 pt-1 ">
      <div className="textstructure mt-44 px-20">
        {["we create", "eye-opening", "presentations"].map((item, index) => (

          <div className="masker">
            <div className="w-fit flex items-center">
              {index === 1 && (
                <motion.div  initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:2}} className="w-[9vw] mt-[1vw] h-[5vw] bg-[url('./image01.jpg')] bg-fit rounded-xl"> </motion.div>
                )}
            <h1 key={index}className="uppercase text-[7vw]  leading-[6vw] tracking-tighter font-medium">{item}</h1>
            </div>
          </div>

        ))}
      </div>



      <div className="border-t-[1px] border-zinc-700 mt-28 py-4 flex justify-between items-center px-[7vw] capitalize">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          );
        })}
        <div className="start flex gap-1 items-center hover:text-black ">
          <div className="px-4 py-1 border-[1px] border-zinc-800 rounded-full text-sm hover:bg-white">
            Start the project
          </div>
          <div className="p-2 border-[1px] border-zinc-800 rounded-full text-sm hover:bg-white ">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
