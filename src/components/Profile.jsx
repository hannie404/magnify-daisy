import React from 'react'

const Profile = ({img, name, program}) => {
  return (
    <div className="flex flex-col md:gap-3 gap-1 items-center md:w-auto w-1/3">
      <div className='md:w-60 w-28 rounded-full bg-[#34301D] md:p-2 p-1'>
        <img src={img} alt="profile" className='rounded-full' />
      </div>
      <h2 className='text-[#34301D] font-semibold md:text-xl text-xs'>{name}</h2>
      <p className='text-[#34301D] md:text-base text-xs -mt-1 break-words' dangerouslySetInnerHTML={{ __html: program }}></p>
    </div>
  )
}

export default Profile