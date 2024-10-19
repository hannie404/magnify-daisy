import React from 'react'
import Card from '../components/Card'

const data = [
  {
    img: '/images/1.svg',
    text: 'Registration opens at 8:00 AM at the LAI Building, Ground Floor (CCF Annex). Register to claim your conference wristband.'
  },
  {
    img: '/images/2.svg',
    text: 'Use your QR code to register and claim your meal. Complimentary snacks will also be available.'
  },
  {
    img: '/images/3.svg',
    text: 'Wristbands will be color-coded based on the workshop you registered for. Please wear your wristbands for the entire duration of the event. NO wristband, no entry.'
  },
  {
    img: '/images/4.svg',
    text: 'Doors to the plenary venue open at 8:00 AM. Seating will be on a first-come, first-served basis.'
  },
  {
    img: '/images/5.svg',
    text: "Join us for a special night of worship during the Saturday Night Service with songs from Exalt Worship's second album at 5:00 PM at the 2F Worship Hall."
  },
]

const SectionTwo = () => {
  return (
    <div>
      <div className="flex flex-col items-center md:p-16 p-5 relative radial-gradient-bg ">
        <div className="text-center md:w-2/5 w-full">
          <img src="/images/title.png" alt="title" />
          <p className='mt-5 md:text-base text-xs text-white'>But before that, please take a moment to review some important reminders and information to help you plan out your day.</p>
        </div>

        {/* Cards */}
        <div className="flex w-full flex-wrap justify-center gap-3 md:my-14 my-8">
          {data.map((item, index) => (
            <Card key={index} img={item.img} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionTwo