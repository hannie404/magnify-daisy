import React from 'react'
import Navbar from '../components/Navbar'

const Hero = () => {
  return (
    <div id='home' className="bg-[url('../../public/images/Background-2.jpg')] w-screen h-screen bg-cover bg-center">
      <Navbar />

      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-4 mt-20">
          <img src="/images/cofmediaWhite.png" alt="cofmediaWhites" className='md:w-28 w-20' />
          <img src="/images/exaltWorshipWhite.png" alt="cofmediaWhites" className='md:w-28 w-20' />
        </div>

        <img src="/images/logo.svg" alt="magnify" className='md:w-2/5 w-3/5 mt-36' />

        <h2 className='md:text-3xl text-base md:my-14'>Ascribe to the Lord the Glory Due His Name</h2>

        <div className="flex flex-col text-center md:text-2xl text-xs">
          October 26, 2024 | 8:00 AM - 4:00 PM <br />
          CCF Center, New Building
        </div>
      </div>
    </div>
  )
}

export default Hero