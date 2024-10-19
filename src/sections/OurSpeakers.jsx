import React from 'react'
import Profile from '../components/Profile'

export const OurSpeakers = () => {

  const speakers = [
    {
      "img": "/images/profiles/PastorRicky.png",
      "name": "Pastor Ricky Sarthou",
      "position": 'Plenary 1: Two Questions <br /> that Demand an Answer'
    },
    {
      "img": "/images/profiles/Paul.png",
      "name": "Paul Armesin",
      "position": "Plenary 2: Church Musicianship"
    },
    {
      "img": "/images/profiles/Omar.png",
      "name": "Omar Regalado",
      "position": "Plenary 3: The Discipline of  <br /> Crafting the Worship Lineup"
    },
    {
      "img": "/images/profiles/DJ.png",
      "name": "DJ Baylon",
      "position": "Plenary 3: The Discipline of  <br /> Crafting the Worship Lineup"
    },
    {
      "img": "/images/profiles/Budz.png",
      "name": "Budz Apelo",
      "position": "Plenary 3: The Discipline of  <br /> Crafting the Worship Lineup",
    },
    {
      "img": "/images/profiles/Kahlil.png",
      "name": "Kahlil Refuerzo",
      "position": "Plenary 4: Ascribe to the <br/> Lord the Glory Due His Name"
    },
  ]

  const workshopSpeakers = [
    {
      "img": "/images/profiles/James.png",
      "name": "James Reyes",
      "position": "Singer's Workshop",
    },
    {
      "img": "/images/profiles/JP.png",
      "name": "JP Ocampo",
      "position": "MD Workshop",
    },
    {
      "img": "/images/profiles/Michelle.png",
      "name": "Michelle Obligacion",
      "position": "Worship Leaders Workshop",
    },
    {
      "img": "/images/profiles/Budz.png",
      "name": "Budz Apelo",
      "position": "Worship Leaders Workshop",
    },
    {
      "img": "/images/profiles/Teej.png",
      "name": "Teej Sosa",
      "position": "Worship Leaders Workshop",
    },
    {
      "img": "/images/profiles/Omar.png",
      "name": "Omar Regalado",
      "position": "Worship Leaders Workshop",
    },
    {
      "img": "/images/profiles/DJ.png",
      "name": "DJ Baylon",
      "position": "Worship Leaders Workshop",
    },
    {
      "img": "/images/profiles/Jayan.png",
      "name": "Jayan Salgatar",
      "position": "Worship Leaders Workshop",
    },
    {
      "img": "/images/profiles/Tyrone.png",
      "name": "Tyrone Ongpauco",
      "position": "Guitar Workshop",
    },
    {
      "img": "/images/profiles/Rodney.png",
      "name": "Rodney Vidanes",
      "position": "Bass Workshop",
    },
    {
      "img": "/images/profiles/Juwil.png",
      "name": "Juwil Bulatao",
      "position": "Keyboard Workshop",
    },
    {
      "img": "/images/profiles/Cocoy.png",
      "name": "Cocoy Degras",
      "position": "Drums & Percs Workshop",
    },
    {
      "img": "/images/profiles/Deej.png",
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
      <img src="/images/plenarySpeakers.png" alt="Our Speaker" className='md:w-2/5 ' />

      {/* Speakers */}
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
      <img src="/images/workshopSpeakers.png" alt="Our Speaker" className='md:w-2/5 ' />

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
