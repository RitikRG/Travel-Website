import React from 'react'
import './aboutHeader.css'

const Aboutheader = () => {
  return (
    <div id="aboutBg" className='w-[100vw] h-[100vh] md:h-[85vh] relative -z-20 top-0  bg-red-400 overflow-x-hidden'>
      <p className='top-1/2 left-1/2 w-[80%] text-center -translate-x-1/2 -translate-y-1/2 absolute text-4xl font-extrabold text-neutral-200 tracking-wide'>About Us</p>
    </div>
  )
}

export default Aboutheader
