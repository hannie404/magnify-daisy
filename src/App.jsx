import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './sections/Hero'
import SectionTwo from './sections/SectionTwo'
import Program from './sections/Program'
import { OurSpeakers } from './sections/OurSpeakers'
import Footer from './sections/Footer'
import Advertisement from './sections/Advertisement'

function App() {

  return (
    <div className='w-screen'>
      <Hero />
      <div className="bg-[#34301D] text-white">
        <SectionTwo />
        <Program />
      </div>
      <div className="bg-white">
        <OurSpeakers />
      </div>
      <div className="bg-[#34301D] radial-gradient-bg-footer">
        <Advertisement />
        <Footer />
      </div>
    </div>
  )
}

export default App
