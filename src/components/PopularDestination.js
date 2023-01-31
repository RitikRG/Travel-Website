import React from 'react'
import './popularDst.css'

const PopularDestination = () => {
  return (
    <div className='w-[95vw] lg:w-[80vw] mx-auto grid grid-cols-1 gap-y-4 relative py-12 text-center px-8 overflow-x-hidden'>
        <p className='text-4xl text-center font-extrabold text-neutral-700 tracking-wide'>Popular Destination</p>
        <p className='text-sm text-neutral-500 font-semibold'>Tours give you a chance to explore a lot in a time frame.</p>
        <div className='grid grid-cols-1 gap-y-4 sm:mt-8 sm:grid-cols-5'>
            <div className='grid grid-cols-2 gap-x-4 py-8 px-4 sm:col-span-1'>
                <div id="taalV1" className='w-[120px] h-[220px] lg:w-[160px] lg:h-[320px] rounded-lg mx-auto translate-y-4 shadow-lg'></div>
                <div id="taalV2" className='w-[120px] h-[220px] lg:w-[160px] lg:h-[320px] rounded-lg mx-auto -translate-y-4 shadow-lg'></div>
            </div>
            <div className='col-span-0 sm:col-span-1'></div>
            <div className='grid grid-cols-1 gap-y-4 sm:col-span-3'>
                <p className='text-xl sm:text-2xl font-bold text-neutral-800'>Taal Volcano, Batangas</p>
                <p className='text-sm font-semibold text-neutral-500 text-justify'>Located in the province of Batangas, the volcano is second of the most active volcanoes in the country, with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake. The caldera was formed by prehistoric eruptions between 140,000 and 5,380 BP. The volcano is located about 50 kilometers (31 mi) south of Manila, the capital of the Philippines. Taal Volcano has had several violent eruptions in the past, causing deaths on the island and the populated areas surrounding the lake.</p>
            </div>
        </div>
        <div className='grid grid-cols-1 gap-y-4 sm:mt-8 sm:grid-cols-5'>
            <div className='grid grid-cols-2 gap-x-4 py-8 px-4 sm:col-span-1 sm:order-last'>
                <div id="mtfV1" className='w-[120px] h-[220px] lg:w-[160px] lg:h-[320px]  rounded-lg mx-auto -translate-y-4 shadow-lg'></div>
                <div id="mtfV2" className='w-[120px] h-[220px] lg:w-[160px] lg:h-[320px] rounded-lg mx-auto translate-y-4 sm:-translate-x-[160%] lg:-translate-x-[120%] shadow-lg'></div>
            </div>
            <div className='col-span-0 sm:col-span-1 sm:order-4'></div>
            <div className='grid grid-cols-1 gap-y-4 sm:col-span-3 sm:order-1'>
                <p className='text-xl font-bold text-neutral-800'>Mt. Fuji, Japan</p>
                <p className='text-sm font-semibold text-neutral-500 text-justify'>Fugaku, located on the island of Honshū, is the highest mountain in Japan, with a summit elevation of 3,776.24 m (12,389 ft 3 in). It is the second-highest volcano located on an island in Asia (after Mount Kerinci on the island of Sumatra), and seventh-highest peak of an island on Earth. Mount Fuji is an active stratovolcano that last erupted from 1707 to 1708. The mountain is located about 100 km (62 mi) southwest of Tokyo and is visible from there on clear days</p>
            </div>
        </div>
    
    </div>
  )
}

export default PopularDestination
