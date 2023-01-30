import React,{useState} from 'react'
import './navbar.css'

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const handleNav =()=>{
        setNav(!nav);
    }

  return (
    <>
    
    <div className='w-[95vw]  md:w-[80vw] left-1/2 -translate-x-1/2 py-2 px-4 md:py-4 md:px-6 bg-neutral-100 fixed top-2 md:top-4 rounded-lg shadow-lg overflow-hidden z-10' >
        <div className='w-[100%]  flex justify-between'>
            <a className='text-2xl font-semibold text-neutral-900'>Trippy</a>
            <div className='hidden lg:flex w-[70%] justify-evenly'>
                <a><button className='px-2 py-1 hover:bg-teal-600 hover:text-neutral-100 text-neutral-800 duration-200 rounded-md'><i class="fa-solid fa-house-user"></i><span className='ml-2 font-semibold'>Home</span></button></a>
                <a><button className='px-2 py-1 hover:bg-teal-600 hover:text-neutral-100 text-neutral-800 duration-200 rounded-md'><i class="fa-solid fa-circle-info"></i><span className='ml-2 font-semibold'>About Us</span></button></a>
                <a><button className='px-2 py-1 hover:bg-teal-600 hover:text-neutral-100 text-neutral-800 duration-200 rounded-md'><i class="fa-solid fa-briefcase"></i><span className='ml-2 font-semibold'>Services</span></button></a>
                <a><button className='px-2 py-1 hover:bg-teal-600 hover:text-neutral-100 text-neutral-800 duration-200 rounded-md'><i class="fa-solid fa-phone"></i><span className='ml-2 font-semibold'>Contact Us</span></button></a>
                <a><button className='px-2 py-1 hover:bg-teal-600 bg-neutral-300 hover:text-neutral-100 text-neutral-800 duration-200 rounded-md'><span className='font-semibold'>Sign Up</span></button></a>
            </div>
            <div id='navHandler' onClick={handleNav} className="lg:hidden">
                <p className="text-2xl">{!nav ?<i className="fa-regular fa-circle-xmark"/> :<i className="fa-solid fa-bars"/>}</p>
            </div>
        </div>
       

    </div>
     <div className={'w-[95vw] md:hidden left-1/2 -translate-x-1/2 p-2 px-4 bg-neutral-100 absolute top-8 -z-1 rounded-lg shadow-lg text-lg font-semibold overflow-hidden' }>
        <div className={!nav? 'mobiNav-active': 'mobiNav'} >
            <div className='w-[100%] py-8'>
                <ui className='list-none w-[90%] mx-auto text-center'>
                    <li><a>Home</a></li>
                    <li className='mt-4'><a>About us</a></li>
                    <li className='mt-4'><a>Services</a></li>
                    <li className='mt-4'><a>Contact Us</a></li>
                </ui>
            </div>
        </div>
    </div>
 </>
  )
}

export default Navbar
