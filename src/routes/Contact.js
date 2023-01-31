import React from 'react'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Contactheader from '../components/Contactheader'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Contactheader/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
