import React from 'react'

const ContactForm = () => {
    return (
        <div className='w-[100vw] py-8 mb-8'>
            
            <div className="w-[95%] sm:w-[80%] mx-auto shadow-lg rounded-xl p-2 pb-6">
                <p className='text-4xl font-semibold text-neutral-600'>We will get back to you!</p>
                <form className="w-[90%] mx-auto grid grid-cols-1 gap-y-1 text-lg mt-8 relative">
                    <div className="flex flex-col-reverse">
                        <input type="text" placeholder="Name" className="peer p-1 rounded-lg shadoe-sm z-10"></input>
                        <label className="px-1 transition-all z-10 peer-placeholder-shown:translate-y-7 peer-placeholder-shown:-z-10 font-semibold">Name</label>
                    </div>
                    <div className="flex flex-col-reverse mt-4">
                        <input type="email" placeholder="Email" className="peer p-1 rounded-lg shadoe-sm z-10"></input>
                        <label className="px-1 transition-all z-10 peer-placeholder-shown:translate-y-7 peer-placeholder-shown:-z-10 font-semibold">Email</label>
                    </div>
                    <div className="flex flex-col-reverse mt-4">
                        <input type="number" placeholder="Mobile No." className="peer p-1 rounded-lg shadoe-sm z-10"></input>
                        <label className="px-1 transition-all z-10 peer-placeholder-shown:translate-y-7 peer-placeholder-shown:-z-10 font-semibold">Mobile No.</label>
                    </div>
                    <div className="flex flex-col-reverse mt-4">
                        <input type="text" placeholder="Country You are interested in visiting" className="peer p-1 rounded-lg shadoe-sm z-10"></input>
                        <label className="px-1 transition-all z-10 peer-placeholder-shown:translate-y-7 peer-placeholder-shown:-z-10 font-semibold">Country You are interested in visiting</label>
                    </div>
                    <div className="flex flex-col-reverse mt-4">
                        <textarea  placeholder="Your Message" rows={5} className="peer p-1 rounded-lg shadoe-sm z-10"></textarea>
                        <label className="px-1 transition-all z-10 peer-placeholder-shown:translate-y-7 peer-placeholder-shown:-z-10 font-semibold">Your Message</label>
                    </div>
                    <button className="bg-teal-500 w-[50%] mx-auto mt-6 rounded-lg py-2 text-white font-semibold hover:scale-105 duration-200 shadow-lg">Send Message<i className="fa-solid fa-paper-plane ml-2"></i></button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
