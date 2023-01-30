import React from 'react'
import './homeHeader.css'

const Homeheader = () => {
  return (
    <div id="headerBg" className='w-[100vw] h-[100vh] md:h-[85vh] absolute -z-20 top-0 z-0 bg-red-400'>
      <p className='top-1/2 left-1/2 w-[80%] text-center -translate-x-1/2 -translate-y-1/2 absolute text-4xl font-extrabold text-neutral-200 tracking-wide'>Your Journey Your Story</p>
      <button className='top-1/2 left-1/2 -translate-x-1/2 translate-y-12 font-semibold text-neutral-800 absolute  bg-neutral-300 px-2 py-1 rounded-lg md:text-xl'>Travel Plans</button>
    </div>
  )
}

export default Homeheader
