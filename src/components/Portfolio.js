import React from "react";
import Project from "./Project";

function Portfolio() {
  const projects = [
    { 
      title: "Melody Match", 
      imageUrl: process.env.PUBLIC_URL + "/logo.png", 
      demoUrl: "https://team-2-project.github.io/Melody-Match/", 
      codeUrl: "https://github.com/team-2-project/Melody-Match" 
    },
    { 
      title: "Vet-Set-Go", 
      imageUrl: process.env.PUBLIC_URL + "/vsg-logo.png", 
      demoUrl: "https://whispering-coast-03143.herokuapp.com/", 
      codeUrl: "https://github.com/Project2Group1/vet-set-go" 
    },
  
  ];
  return (
    <div id="portfolio" className="container">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
