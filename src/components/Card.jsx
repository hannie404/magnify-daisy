import React from 'react'

const Card = ({ img, text }) => {
  return (
    <div className='flex justify-center items-center gap-3 bg-[#3A3725] border border-border-card rounded-2xl md:p-5 w-1/3 text-left'>
      <div className="w-1/6 flex justify-center">
      <img src={img} alt="icon" className='w-7 h-12' />
      </div>
      <p className='w-5/6'>{text}</p>
    </div>
  )
}

export default Card