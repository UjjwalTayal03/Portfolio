import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import resume from "/resume.pdf";

const About = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["a Web Developer.", "an ML Engineer."],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="text-white mt-20 space-y-10 sm:space-y-14 text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl mb-2">
        I'm <span ref={el}></span>
      </h2>
      <span className="text-base sm:text-lg">Currently, I'm a student.</span>
      <br /> <br />
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:text-purple-300 hover:border-purple-300 inline-block"
      >
        Resume
      </a>
      <p className="w-full md:w-3/4 text-base sm:text-lg leading-relaxed mx-auto md:mx-0">
        A Full Stack Developer and AI enthusiast. I love creating interactive web experiences and bringing innovative ideas to life with AI and machine learning.
      </p>
    </div>
  );
};

export default About;
