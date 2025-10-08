import React from 'react';
import iconportfolio from "../assets/iconportfolio.webp";


const Hero = () => {
  return (
    <div className='mt-16 flex relative' id='Hero'>
      
      {/* Avatar with gradient background */}
      <div className='relative flex justify-center items-center rounded-full w-44 h-44 top-9'>
        <div className='absolute inset-0 rounded-full bg-gradient-to-b from-purple-50 to-purple-900 blur-3xl opacity-50'></div>
        <img
          className='relative h-44 w-44 object-contain'
          src={iconportfolio}
          alt="profile icon"
        />
      </div>

      {/* Text Section */}
      <div className='ml-8 relative'>
        <div className='text-white font-sans mb-14 relative right-3  '>
          Hello! I Am <span className='text-purple-600'>Ujjwal Tayal</span>
        </div>
        <div className='text-white'>
          <span className='underline decoration-1 decoration-gray-400'>I Develop what</span><br />
          <span className='text-[40px]'>Happens behind <br /> the <span className='text-purple-600'>screen</span>...</span><br />
          <span className='text-xs'>and sometimes inside the mind.</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
