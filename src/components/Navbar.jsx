import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-glass backdrop-blur-xs w-full border border-border-glass lg:px-12">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img src="/public/images/magnify.png" alt="logo" className="w-32" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a className='text-white hover:bg-light hover:text-whiteg'>Home</a></li>
            <li><a className='text-white hover:bg-light hover:text-whiteg'>Program</a></li>
            <li><a className='text-white hover:bg-light hover:text-whiteg'>Speakers</a></li>
            <li><a className='text-white hover:bg-light hover:text-whiteg'>Set List</a></li>
            <li><input type="button" value="Register" className='bg-white text-[#1E1E1E] hover:text-white' /></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar