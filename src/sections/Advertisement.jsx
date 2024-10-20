import React, { useState, useEffect } from 'react';

const Advertisement = () => {
  const carouselImages = [
    "/images/merch/merch1.png",
    "/images/merch/merch2.png",
    "/images/merch/merch3.png",
    "/images/merch/merch4.png",
    "/images/merch/merch5.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className='bg-[#34301D] flex flex-col justify-between'>
      <div className="bg-white text-center text-[#34301D] md:text-3xl font-bold  md:px-40 md:pb-10 md:p-0 p-5">
        Check out our limited edition Exalt Worship merch at our Merch booth located at the 2F LAI Building on October 26, 2024. Payment mode is cash only.
      </div>
      <img src="/images/FinalMerchPosting.png" alt="Advertisement" className="w-full md:w-auto md:block hidden" />

      <div className="carousel-container w-full md:hidden overflow-hidden relative">
        <div
          className="carousel-inner flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselImages.map((image, index) => (
            <div className="carousel-item w-full flex-shrink-0" key={index}>
              <img src={image} className="w-full" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button
            className="btn btn-circle hover:bg-[#34301D] hover:text-white w-5 bg-glass backdrop-blur-2xl redcg32w border border-border-glass text-white"
            onClick={() => setCurrentSlide((currentSlide - 1 + carouselImages.length) % carouselImages.length)}
          >
            ❮
          </button>
          <button
            className="btn btn-circle hover:bg-[#34301D] hover:text-white w-5 bg-glass text-white backdrop-blur-2xl redcg32w border border-border-glass"
            onClick={() => setCurrentSlide((currentSlide + 1) % carouselImages.length)}
          >
            ❯
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center md:p-16 p-5 relative radial-gradient-bg-ad">
        <div className="text-center md:w-screen md:px-40">
          <img src="/images/OneLoveAlbum.PNG" alt="program" className='w-full rounded-2xl border-2 border-[#fdebd17b]' />
        </div>
        <h1 className='md:text-3xl text-base text-white mt-5'>This is a <span className='font-bold'>FREE EVENT!</span> See you there!</h1>
      </div>
    </div>
  );
};

export default Advertisement;