import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiPytorch, SiTensorflow, SiJavascript, SiExpress } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Python", icon: <FaPython className="text-indigo-400" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
  {name: "Express", icon: <SiExpress className="text-white"/>}
];

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-5 mt-10 relative" id="skills">
        <div className="absolute inset-0 w-1/2 rounded-full bg-gradient-to-b from-purple-800 to-purple-900 blur-3xl opacity-50 translate-x-1/2 "></div>
      <h2 className="text-3xl md:text-4xl font-medium text-white mb-10 text-center relative">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-sm hover:border hover:border-white cursor-pointer hover:shadow-gray-50"
          >
            <div className="text-2xl">{skill.icon}</div>
            <span className="text-white font-medium">{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-400">
        <p>These are the tools and technologies I enjoy working with to bring ideas to life 🚀</p>
      </div>
  
    </div>
  );
};

export default Skills;