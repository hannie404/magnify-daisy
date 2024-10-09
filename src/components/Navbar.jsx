import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-glass backdrop-blur-2xl w-full border border-border-glass lg:px-12 fixed z-20">
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1E1E1E] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a className='text-white hover:text-white' href="#home">Home</a></li>
              <li><a className='text-white hover:text-white' href="#program">Program</a></li>
              <li><a className='text-white hover:text-white' href="#speakers">Speakers</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">
            <img src="/images/logo.svg" alt="Magnify" className="w-32" />
          </a>
        </div>
        {/* <div className="navbar-end lg:hidden">
          <a href="https://magnify2024.conscor.com/reg.html"><input type="button" value="Register" className="bg-white p-1 px-3 rounded-xl text-sm text-[#1E1E1E] hover:text-white" /></a>
        </div> */}
        <div className="navbar-end lg:hidden">
          <a href="https://magnify2024.conscor.com/reg.html" className="bg-white p-1 px-3 rounded-xl text-sm text-[#1E1E1E] hover:text-white">
            Register
          </a>
        </div>
        <div className="hidden lg:flex flex-1 justify-end">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#home" className="text-white hover:bg-light hover:text-white">Home</a></li>
            <li><a href="#program" className="text-white hover:bg-light hover:text-white">Program</a></li>
            <li><a href="#speakers" className="text-white hover:bg-light hover:text-white">Speakers</a></li>
            <li>
              <a href="https://magnify2024.conscor.com/reg.html" className="bg-white text-[#1E1E1E] hover:text-white">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;