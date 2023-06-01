import React from "react";
import Project from "./Project";

function Portfolio() {
  // replace with your own project details
  const projects = [
    { title: "Project 1", imageUrl: "", demoUrl: "", codeUrl: "" },
    // ...
  ];
  return (
    <div id="portfolio" className="container">
      <h2>Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
