import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Hero = () => {
  const [bgImage, setBgImage] = useState('/images/Background-2-lowres.jpg');
  const highResImage = '/images/Background-2.jpg';

  useEffect(() => {
    const img = new Image();
    img.src = highResImage;
    img.onload = () => {
      setBgImage(highResImage);
    };
  }, [highResImage]);

  return (
    <div
      id="home"
      className="w-screen h-screen bg-cover bg-left transition-opacity duration-500"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-4 mt-20 items-center">
          <img src="/images/cofmediaWhite.png" alt="cofmediaWhites" className="md:w-28 w-20 h-fit" />
          <img src="/images/exaltWorshipWhite.png" alt="cofmediaWhites" className="md:w-28 w-20" />
        </div>
        <img src="/images/logo.svg" alt="magnify" className="md:w-2/5 w-3/5 mt-36" />
        <h2 className="md:text-3xl text-base md:my-14 text-white">Ascribe to the Lord the Glory Due His Name</h2>
        <div className="flex flex-col text-center md:text-2xl text-xs text-white">
          October 26, 2024 | 8:00 AM - 4:30 PM <br />
          CCF Center, New Building
        </div>
      </div>
    </div>
  );
};

export default Hero;