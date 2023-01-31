import React from 'react'
import {Link, link} from 'react-router-dom';
import './footer.css'

const Footer = () => {
  return (
    <div className='w-[100vw] bg-neutral-900 mt-8 py-8 px-4'>
      <div className='w-[95%] md:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-3 sm:gap-x-2'>
        <div className='grid grid-cols-1 gap-y-2 sm:py-8'>
            <Link to='/'><p className='text-neutral-50 text-2xl font-bold'>Trippy</p></Link>
            <p className='text-neutral-400 font-semibold' >Choose your favourite destination.</p>
            <div className='grid grid-cols-7 gap-x-2'>
                <a href='https://www.instagram.com/_ritik_gupta_rg/' target={'_blank'}><p className='text-neutral-100 text-2xl'><i className="fa-brands fa-instagram"></i></p></a>
                <a href='https://twitter.com/GuptaRitik19' target={'_blank'}><p className='text-neutral-100 text-2xl'><i className="fa-brands fa-twitter"></i></p></a>
                <a href='https://www.linkedin.com/in/rgritik/' target={'_blank'}><p className='text-neutral-100 text-2xl'><i className="fa-brands fa-linkedin"></i></p></a>
                <a href='https://github.com/RitikRG' target={'_blank'}><p className='text-neutral-100 text-2xl'><i className="fa-brands fa-github"></i></p></a>
            </div>
        </div>
        <div className='grid grid-cols-2 text-neutral-400 py-8 font-semibold sm:gap-x-2'>
            <div className='grid grid-cols-1 grid-rows-5'>
                <p className='text-lg text-neutral-200'>Project</p>
                <a><p >Changelog</p></a>
                <a><p>Status</p></a>
                <a><p>Liscence</p></a>
                <a><p>All versions</p></a>
            </div>
            <div className='grid grid-cols-1 grid-rows-5'>
                <p className='text-lg text-neutral-200'>Community</p>
                <a><p >GitHub</p></a>
                <a><p>Issues</p></a>
                <a><p>Project</p></a>
                <a><p>Twitter</p></a>
            </div>
        </div>
        <div className='grid grid-cols-2 text-neutral-400 pb-8 sm:py-8 font-semibold sm:gap-x-2' >
            <div className='grid grid-cols-1 grid-rows-4 sm:grid-rows-5'>
                <p className='text-lg text-neutral-200'>Help</p>
                <a><p >Support</p></a>
                <a><p>Troubleshoot</p></a>
                <a><p>Contact Us</p></a>
            </div>
            <div className='grid grid-cols-1 grid-rows-4 sm:grid-rows-5'>
                <p className='text-lg text-neutral-200'>Others</p>
                <a><p >Terms Of service</p></a>
                <a><p>Privacy Policy</p></a>
                <a><p>Liscences</p></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
