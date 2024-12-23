import React from 'react'

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
     <div className="cardcontainer h-[50vh] w-1/2">
     <div className="card relative rounded-xl w-full h-full  flex justify-center items-center bg-[#004D43]">
     <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
     <button className="absolute px-5 pt-1 rounded-full border-['#000'] border-2 left-10 bottom-10">&copy; 2019-2020</button>
     </div>
     </div>
     <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
     <div className="card relative rounded-xl w-1/2 h-full  flex justify-center items-center bg-[#212121]">
     <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
     <button className="absolute px-8 p-3 rounded-full border-['#000'] border-2 m-5 bottom-0 uppercase text-[1vw]">Rating on Clutch</button>
     </div>
     <div className="card relative rounded-xl w-1/2 h-full  flex justify-center items-center bg-[#212121]    ">
     <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
     <button className="absolute px-4 p-0 rounded-full border-['#000'] border-2 m-5 bottom-0 uppercase text-[1vw]">bussiness bootcamp alumni </button>
     </div>
     </div>
     

    </div>
  )
}

export default Cards