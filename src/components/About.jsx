import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const About = () => {
  const el = useRef(null); 

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer.", "ML Engineer."],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
    });

    return () => {
     
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-white mt-20 ml-5 space-y-14">
        <h2 className="text-4xl mb-2">I'm a <span ref={el}></span></h2>
        <span className="text-lg">Currently, I'm a student.</span>
        <p className="w-3/4 text-xl leading-relaxed">A Full Stack Developer and AI enthusiast. I love creating interactive web experiences and bringing innovative ideas to life with AI and machine learning.</p>
      
    </div>
  );
};

export default About;
