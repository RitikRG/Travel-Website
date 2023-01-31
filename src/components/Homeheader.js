import React from 'react'
import {Link} from 'react-router-dom'
import './homeHeader.css'

const Homeheader = () => {
  return (
    <div id="headerBg" className='w-[100vw] h-[100vh] md:h-[85vh] relative -z-20 top-0  bg-red-400 overflow-x-hidden'>
      <p className='top-1/2 left-1/2 w-[80%] text-center -translate-x-1/2 -translate-y-1/2 absolute text-4xl font-extrabold text-neutral-200 tracking-wide'>Your Journey Your Story</p>
      <Link to='/service'><button className='top-1/2 left-1/2 -translate-x-1/2 translate-y-12 font-semibold text-neutral-800 absolute  bg-neutral-300 px-2 py-1 rounded-lg md:text-xl'>Travel Plans</button></Link>
    </div>
  )
}

export default Homeheader
