import React from 'react'
import Footer from '../components/Footer'
import Homeheader from '../components/Homeheader'
import Navbar from '../components/Navbar'
import PopularDestination from '../components/PopularDestination'
import RecentTrips from '../components/RecentTrips'


const Home = () => {
  return (
    <>
      <Navbar/>
      <Homeheader/>
      <PopularDestination/>
      <RecentTrips/>
      <Footer/>
    </>
  )
}

export default Home
