import React from 'react'
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";


const Contact = () => {
  return (
    <div className='text-white mt-48' id='Contact'>
        <h1 className='text-2xl mb-16'>Contact</h1>
        <p className='w-3/4 text-sm leading-relaxed mb-6'>I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. or have a project in mind? Let's connect.</p>
        <a className='text-sm  flex items-center gap-3 mb-1' href="mailto:ujjwaltayal40@gmail.com"><MdEmail/>ujjwaltayal40@gmail.com</a>
        <a className='flex text-sm items-center gap-3' href="tel:+919756618705"><MdPhone/> 9756618705</a>
        <div className="flex gap-6 text-2xl text-white mb-60 mt-6">
      <a href="https://www.linkedin.com/in/ujjwaltayal" target="_blank"><FaLinkedin /></a>
      <a href="https://github.com/UjjwalTayal03" target="_blank"><FaGithub /></a>
      <a href="https://leetcode.com/ujjwaltayal_" target="_blank"><SiLeetcode /></a>
    </div>
    </div>
  )
}

export default Contact