import React from 'react'
import Footer from '../components/Footer'
import RecentTrips from '../components/RecentTrips'
import Navbar from '../components/Navbar'
import Serviceheader from '../components/Serviceheader'
import UpcomingTrips from '../components/UpcomingTrips'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <Serviceheader/>
      <RecentTrips/>
      <UpcomingTrips/>
      <Footer/>
    </div>
  )
}

export default Services
