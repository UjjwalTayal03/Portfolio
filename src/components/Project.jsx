import React from "react";
import ProjectCard from "./ProjectCard";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";

const Project = () => {
  return (
    <div className="mt-32 text-white space-y-24" id="Projects">

      {/* SECTION HEADING */}
      <div className="text-center space-y-3">
        <h2 className="text-purple-600 font-semibold tracking-wide">
          My Work
        </h2>
        <h1 className="text-3xl sm:text-4xl font-bold">
          Featured Projects
        </h1>
      </div>

      {/* PROJECT LIST */}
      <div className="space-y-32">
        <ProjectCard
          subtitle="Project 1"
          title="Url-Shortener"
          description="The URL Shortener project allows users to generate short links for long URLs. It uses JSON for data handling, Local Storage for saving shortened links on the client side, and PHP for backend processing and redirection."
          image={pro1}
          reverse={false}
        />

        <ProjectCard
          subtitle="Project 2"
          title="Internship Portal"
          description="An internship portal where users upload their resumes, which are converted into embeddings for skill-based matching with internship listings."
          image={pro2}
          reverse={true}
        />
      </div>

    </div>
  );
};

export default Project;