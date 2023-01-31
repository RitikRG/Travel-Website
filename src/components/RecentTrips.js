import React from 'react'
import './recentTrips.css'

const RecentTrips = () => {
  return (
    <div className='w-[90vw] md:w-[80vw] mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-3 sm:gap-x-3 text-center gap-y-8'>
        <div className='text-2xl font-bold text-neutral-800 text-center sm:col-span-3'>Recent Trips</div>
        <div className='grid grid-cols-1 gap-y-4 bg-neutral-100 rounded-lg shadow-lg p-4 hover:scale-105 duration-200'>
            <div id='italyBg' className='w-[95%] h-[150px] mx-auto rounded-lg'></div>
            <div className='text-neutral-600 font-semibold text-justify px-2'>Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins.</div>
        </div>
        <div className='grid grid-cols-1 gap-y-4 bg-neutral-100 rounded-lg shadow-lg p-4 hover:scale-105 duration-200'>
            <div id='newZealandBg' className='w-[95%] h-[150px] mx-auto rounded-lg'></div>
            <div className='text-neutral-600 font-semibold text-justify px-2'>New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands. It is the sixth-largest island country.</div>
        </div>
        <div className='grid grid-cols-1 gap-y-4 bg-neutral-100 rounded-lg shadow-lg p-4 hover:scale-105 duration-200'>
            <div id='greeceBg' className='w-[95%] h-[150px] mx-auto rounded-lg'></div>
            <div className='text-neutral-600 font-semibold text-justify px-2'>Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas. Influential in ancient times, it's often called the cradle of Western civilization.</div>
        </div>
      
    </div>
  )
}

export default RecentTrips
