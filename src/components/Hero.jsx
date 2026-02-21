import React from 'react';
import iconportfolio from "../assets/iconportfolio.webp";

const Hero = () => {
  return (
    <div className="mt-36 flex flex-col md:flex-row items-center md:items-start text-center md:text-left" id="Hero">
      <div className="relative flex justify-center items-center rounded-full w-40 h-40 md:w-44 md:h-44 mb-6 md:mb-0">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-purple-50 to-purple-900 blur-3xl opacity-50"></div>
        <img
          className="relative h-40 w-40 md:h-44 md:w-44 object-contain"
          src={iconportfolio}
          alt="profile icon"
        />
      </div>

      <div className="md:ml-8">
        <div className="text-white font-sans mb-6 md:mb-14">
          Hello! I Am <span className="text-purple-600">Ujjwal Tayal</span>
        </div>
        <div className="text-white">
          <span className="underline decoration-1 decoration-gray-400">I Develop what</span><br />
          <span className="text-3xl md:text-[40px] leading-snug">
            Happens behind <br /> the <span className="text-purple-600">screen</span>...
          </span><br />
          <span className="text-sm md:text-xs">and sometimes inside the mind.</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
