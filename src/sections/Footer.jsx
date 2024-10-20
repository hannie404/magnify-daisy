import React from 'react'

const Footer = () => {
  return (
    <div className='bg-glass backdrop-blur-2xl w-screen md:mt-10 mt-5'>
      <div className="md:p-10 p-5">
      {/* <div className="radial-gradient-bg md:p-10 p-5"> */}
        <div className="flex justify-center items-center">
          <div className="border-0 border-r-2 border-white md:p-3 p-2 flex md:flex-row flex-col items-center">
            <img src="/images/cofmediaWhite.png" alt="cofmediaWhites" className="md:w-40 w-28 h-fit" />
            <img src="/images/exaltWorshipWhite.png" alt="Exalt Worshiper" className='md:w-40 w-28 ' />
          </div>
          <div className="flex flex-col md:gap-3 gap-2 md:p-5 p-3">
            <h2 className='font-semibold text-white md:text-base text-xs text-left'>FOLLOW US FOR MORE UPDATES</h2>
            <div className="flex flex-col md:gap-2 gap-0">
              <div className="flex md:gap-4 gap-2">
                <img src="/images/fb.svg" alt="Facebook" className='md:w-auto w-4' />
                <p><a href="https://www.facebook.com/ccfexaltworship" className='text-white md:text-base text-xs hover:text-gray-400'>/ccfexaltworship</a></p>
              </div>
              <div className="flex md:gap-4 gap-2">
                <img src="/images/ig.svg" alt="Instagram" className='md:w-auto w-4' />
                <p><a href="https://www.instagram.com/ccfexaltworship" className='text-white md:text-base text-xs hover:text-gray-400'>/ccfexaltworship</a></p>
              </div>
              <div className="flex md:gap-4 gap-2">
                <img src="/images/yt.svg" alt="YouTube" className='md:w-auto w-4' />
                <p><a href="https://www.youtube.com/ccfexaltworship" className='text-white md:text-base text-xs hover:text-gray-400'>@ccfexaltworship</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer