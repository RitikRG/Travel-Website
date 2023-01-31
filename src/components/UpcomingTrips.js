import React from 'react'
import './upcomingTrips.css'

const UpcomingTrips = () => {
  return (
    <div className='w-[90vw] md:w-[80vw] mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-3 sm:gap-x-3 text-center gap-y-8'>
        <div className='text-2xl font-bold text-neutral-800 text-center sm:col-span-3'>Upcoming Trips</div>
        <div className='grid grid-cols-1 gap-y-4 bg-neutral-100 rounded-lg shadow-lg p-4 hover:scale-105 duration-200'>
            <div id='russiaBg' className='w-[95%] h-[150px] mx-auto rounded-lg'></div>
            <div className='text-neutral-600 font-semibold text-justify px-2'>Want to come over the stereotype? Join us on a trip to explore the real Russia starting on 06/02/2023.</div>
            <button className='text-neutral-50 bg-teal-500 py-2 hover:scale-105 duration-200 rounded-lg shadow-lg w-[90%] mx-auto  h-[50px]'>Know More</button>
        </div>
        <div className='grid grid-cols-1 gap-y-4 bg-neutral-100 rounded-lg shadow-lg p-4 hover:scale-105 duration-200'>
            <div id='norwayBg' className='w-[95%] h-[150px] mx-auto rounded-lg'></div>
            <div className='text-neutral-600 font-semibold text-justify px-2'>Get to visit the real life fairytale land with exceptionally warm and welcoming people and natural beauty second to none.</div>
            <button className='text-neutral-50 bg-teal-500 py-2 hover:scale-105 duration-200 rounded-lg shadow-lg w-[90%] mx-auto  h-[50px]'>Know More</button>
        </div>
        <div className='grid grid-cols-1 gap-y-4 bg-neutral-100 rounded-lg shadow-lg p-4 hover:scale-105 duration-200'>
            <div id='indiaBg' className='w-[95%] h-[150px] mx-auto rounded-lg'></div>
            <div className='text-neutral-600 font-semibold text-justify px-2'>Get ready to have a blast of cultural expiriences. Explore the country which have the landcapes like no other. From mountains to deserts, Beaches to Backwater.</div>
            <button className='text-neutral-50 bg-teal-500 py-2 hover:scale-105 duration-200 rounded-lg shadow-lg w-[90%] mx-auto h-[50px]'>Know More</button>
        </div>
      
    </div>
  )
}

export default UpcomingTrips
