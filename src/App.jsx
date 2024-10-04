import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './sections/Hero'
import SectionTwo from './sections/SectionTwo'
import Program from './sections/Program'
import { OurSpeakers } from './sections/OurSpeakers'

function App() {

  return (
    <div className='w-screen'>
      <Hero />
      <SectionTwo />
      <Program />
      <div className="bg-white">
        <OurSpeakers />
      </div>
    </div>
  )
}

export default App
