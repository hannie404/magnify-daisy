import React from 'react'
import Card from '../components/Card'

const data = [
  {
    img: '/images/1.svg',
    text: 'Registration opens at 8:00AM at the Ground Floor Lobby, CCF Main Building, in front of the Bookstore. Register to claim your conference wristband.'
  },
  {
    img: '/images/2.svg',
    text: 'Wristbands will be color coded based on the workshop you registered for. Please wear your wristbands for the entire duration of event. No wristband no entry.'
  },
  {
    img: '/images/3.svg',
    text: 'Nearby meal options: CCF Cafeteria, restaurants in Tiendesitas'
  },
  {
    img: '/images/4.svg',
    text: 'Parking is available at the CCF Center. Please take the WEST elevator or stairs to the Ground Floor Lobby.'
  },
  {
    img: '/images/5.svg',
    text: 'Doors to the plenary venue opens at 12:00 NN. Seating will be on a first come first served basis'
  },
]

const SectionTwo = () => {
  return (
    <div>
      <div className="flex flex-col items-center md:p-16 p-5 relative radial-gradient-bg ">
      {/* <div className="absolute radial-gradient-bg h-4/5 bg-contain w-3/4 h-12 top-0">

      </div> */}
        <div className="text-center md:w-2/5 w-full">
          <img src="/images/title.png" alt="title" />
          <p className='mt-5 md:text-base text-xs'>But before that, please take a moment to review some important reminders and information to help you plan out your day.</p>
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