import React from 'react'
import Profile from '../components/Profile'

export const OurSpeakers = () => {

  const speakers = [
    {
      "img": "/images/profilePic.png",
      "name": "Pastor Ricky Sarthou",
      "position": "Plenary 1"
    },
    {
      "img": "/images/profilePic.png",
      "name": "Paul Armesin",
      "position": "Plenary 2: Church Musicianship"
    },
    {
      "img": "/images/profilePic.png",
      "name": "Omar Regalado",
      "position": "Plenary 3: Song List Creation"
    },
    {
      "img": "/images/profilePic.png",
      "name": "Dj Baylon",
      "position": "Plenary 3: Song List Creation"
    },
    {
      "img": "/images/profilePic.png",
      "name": "Kahlil Refuerzo",
      "position": "Plenary 4: Ascribe to the Lord"
    },
  ]

  const workshopSpeakers = [
    {
      "img": "/images/profilePic.png",
      "name": "James Reyes",
      "position": "Singer's Workshop",
    },
    {
      "img": "/images/profilePic.png",
      "name": "JP Ocampo",
      "position": "MD Workshop",
    },
    {
      "img": "/images/profilePic.png",
      "name": "Michelle Obligacion",
      "position": "Worship Leaders Workshop",
    },
    {
      "img": "/images/profilePic.png",
      "name": "Budz Apelo",
      "position": "Worship Leaders Workshop",
    },
    {
      "img": "/images/profilePic.png",
      "name": "Teej Sosa",
      "position": "Worship Leaders Workshop",
    },
    {
      "img": "/images/profilePic.png",
      "name": "Omar Regalado",
      "position": "Worship Leaders Workshop",
    },
    {
      "img": "/images/profilePic.png",
      "name": "DJ Baylon",
      "position": "Worship Leaders Workshop",
    },
    {
      "img": "/images/profilePic.png",
      "name": "Jayan Salgatar",
      "position": "Worship Leaders Workshop",
    },
    {
      "img": "/images/profilePic.png",
      "name": "Tyrone Ongpauco",
      "position": "Guitar Workshop",
    },
    {
      "img": "/images/profilePic.png",
      "name": "Rodney Vidanes",
      "position": "Bass Workshop",
    },
    {
      "img": "/images/profilePic.png",
      "name": "Juwil Bulatao",
      "position": "Keyboard Workshop",
    },
    {
      "img": "/images/profilePic.png",
      "name": "Cocoy Degras",
      "position": "Drums & Percs Workshop",
    },
    {
      "img": "/images/profilePic.png",
      "name": "Deej Legaspi",
      "position": "Drums & Percs Workshop",
    },
  ]

  return (
    <div id='speakers' className='relative curl-bg md:p-40 p-10'>
      <div className="md:w-2/12 md:h-72 bg-[#34301D] p-10 absolute top-0 right-0 rounded-bl-full flex justify-center items-center md:block hidden">
        <img src="/images/logo.svg" alt="logo" className='md:mb-16' />
      </div>

      {/* Our Speakers */}
      <img src="/images/ourSpeaker.png" alt="Our Speaker" className='md:w-2/5 ' />

      {/* Speakers */}
      <h1 className='text-[#34301D] font-semibold md:text-4xl text-2xl'>PLENARY SPEAKERS</h1>
      <div className="flex w-full flex-wrap justify-center gap-3 md:my-14 my-10">
        <div className="md:w-full md:gap-10 gap-5 flex justify-center flex-wrap">
          {speakers.map((item, index) => (
            <Profile key={index} img={item.img} name={item.name} program={item.position} />
          ))}
        </div>
      </div>

      <div className='absolute md:bg-none curl-bg w-full h-screen left-0'>
      </div >
      {/* Workshop Speakers */}
      <img src="/images/workshopSpeaker.png" alt="Our Speaker" className='md:w-2/5 ' />

      {/* Speakers */}
      <div className="flex w-full flex-wrap justify-center gap-3 md:my-14 my-5">
        <div className="md:w-full md:gap-10 gap-5 flex justify-center flex-wrap">
          {workshopSpeakers.map((item, index) => (
            <Profile key={index} img={item.img} name={item.name} program={item.position} />
          ))}
        </div>
      </div>

    </div>
  )
}
