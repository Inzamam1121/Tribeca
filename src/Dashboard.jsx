import React from 'react'
import Nav from './Component/Nav'
import Banner from './Component/Banner'
import Text from './Component/Text'
import About from './Component/About'
import Slider from './Component/Slider'
import Topnav from './Component/Topnav'
import Footer from './Component/Footer'

const Dashboard = () => {
  return (
    <div className='flex flex-col'>
      <Topnav />
      <Nav />
      <Banner />
      <Text />
      <div id='about'>
        <About />
      </div>
      <div id="produce">
        <Slider />
      </div>
      <div id='contact'>
        <Footer />
      </div>

    </div>
  )
}

export default Dashboard