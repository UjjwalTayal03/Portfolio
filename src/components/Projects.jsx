import React from 'react'
import pro1 from "../assets/pro1.png"
import pro2 from "../assets/pro2.png"

const Projects = () => {
  return (
    <div className="mt-32 text-white space-y-32" id="Projects">
      {/* Project 1 */}
      <div className="flex flex-col md:flex-row items-center md:items-start relative gap-10">
        <div className="desc w-full md:w-1/2 z-30 order-2 md:order-1 text-center md:text-left">
          <h2 className="text-purple-600 font-semibold">Project 1</h2>
          <h3 className="text-2xl mb-5 font-semibold opacity-90">Url-Shortener</h3>
          <p className="text-sm bg-slate-100 bg-opacity-10 opacity-90 p-5 rounded-xl backdrop-blur-3xl">
            The URL Shortener project allows users to generate short links for long URLs. It uses JSON for data handling, Local Storage for saving shortened links on the client side, and PHP for backend processing and redirection.
          </p>
          <button className="border mt-5 px-4 py-2 rounded-full transition-all hover:scale-105 hover:text-purple-300 hover:border-purple-300">
            Go Live
          </button>
        </div>
        <div className="w-full md:w-1/2 relative order-1 md:order-2">
          <div className="absolute z-10 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-blue-300 to-purple-900 blur-3xl opacity-70 translate-x-10 md:translate-x-44"></div>
          <img className="w-full rounded-2xl relative z-20" src={pro1} alt="Project 1" />
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col md:flex-row items-center md:items-start relative gap-10">
        <div className="w-full md:w-1/2 relative order-1">
          <div className="absolute z-10 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tl from-blue-300 to-purple-900 blur-3xl opacity-70"></div>
          <img className="w-full rounded-2xl relative z-20" src={pro2} alt="Project 2" />
        </div>
        <div className="desc w-full md:w-1/2 z-30 order-2 text-center md:text-right">
          <h2 className="text-purple-600 font-semibold">Project 2</h2>
          <h3 className="text-2xl mb-5 font-semibold opacity-90">Internship Portal</h3>
          <p className="text-sm bg-slate-100 bg-opacity-10 opacity-90 p-5 rounded-xl backdrop-blur-3xl">
            An internship portal where users upload their resumes, which are converted into embeddings for skill-based matching with internship listings.
          </p>
          <button className="border mt-5 px-4 py-2 rounded-full transition-all hover:scale-105 hover:text-purple-300 hover:border-purple-300">
            Go Live
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
