import React from 'react';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Navbar = () => {
  return (
    
    <div className='fixed top-0 left-0 w-full z-50' id='Nav'>
    <div className='flex bg-[rgb(26,11,46)] text-white h-16 items-center justify-around bg-opacity-95 backdrop-blur-3xl'>
      <div className='logo w-1/3 justify-center flex'>Ujjwal's Portfolio</div>
      <div className='flex justify-evenly w-2/3 text-lg'>
        <button onClick={() => scrollToSection('Hero')} className='relative border-b-2 border-transparent hover:border-white transition-all duration-300'>Home</button>
        <button onClick={() => scrollToSection('Projects')} className='relative border-b-2 border-transparent hover:border-white transition-all duration-300'>Projects</button>
        <button onClick={() => scrollToSection('Contact')} className='relative border-b-2 border-transparent hover:border-white transition-all duration-300'>Contact</button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
