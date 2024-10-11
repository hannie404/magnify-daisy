import React from 'react'

const Card = ({ img, text }) => {
  return (
    <div className='flex justify-center items-center gap-3 bg-[#3A3725] border border-border-card rounded-2xl md:p-5 p-3 md:w-1/3 w-full text-left md:h-24 h-auto'>
      <div className="w-1/6 flex justify-center">
      <img src={img} alt="icon" className='w-7 h-12' />
      </div>
      <p className='w-5/6 md:text-base text-xs text-white'>{text}</p>
    </div>
  )
}

export default Card