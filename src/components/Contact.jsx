import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="text-white mt-32 text-center md:text-left" id="Contact">
      <h1 className="text-2xl mb-10">Contact</h1>
      <p className="w-full md:w-3/4 text-sm leading-relaxed mb-6 mx-auto md:mx-0">
        I'm currently looking to join a cross-functional team that values improving people's lives through accessible design.
      </p>
      <div className="flex flex-col items-center md:items-start gap-2 text-sm">
        <a className="flex items-center gap-2" href="mailto:ujjwaltayal40@gmail.com"><MdEmail /> ujjwaltayal40@gmail.com</a>
        <a className="flex items-center gap-2" href="tel:+919756618705"><MdPhone /> 9756618705</a>
      </div>
      <div className="flex justify-center md:justify-start gap-6 text-2xl mt-6">
        <a href="https://www.linkedin.com/in/ujjwaltayal" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/UjjwalTayal03" target="_blank"><FaGithub /></a>
        <a href="https://leetcode.com/ujjwaltayal_" target="_blank"><SiLeetcode /></a>
      </div>
    </div>
  );
};

export default Contact;
