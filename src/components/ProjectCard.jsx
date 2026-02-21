import React from "react";

const ProjectCard = ({ title, subtitle, description, image, reverse }) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* TEXT SECTION FIRST IN DOM */}
      <div className="w-full md:w-1/2 relative z-30 text-left">
        <h2 className="text-purple-600 font-semibold">{subtitle}</h2>

        <h3 className="text-2xl mb-5 font-semibold opacity-90">
          {title}
        </h3>

        <div className="text-sm bg-slate-100 bg-opacity-10 opacity-90 p-5 rounded-xl backdrop-blur-3xl">
          {description}
        </div>

        <button className="border mt-5 px-4 py-2 rounded-full transition-all hover:scale-105 hover:text-purple-300 hover:border-purple-300">
          Go Live
        </button>
      </div>

      {/* IMAGE SECTION */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute z-10 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-blue-300 to-purple-900 blur-3xl opacity-70"></div>

        <img
          className="w-full rounded-2xl relative z-20"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default ProjectCard;