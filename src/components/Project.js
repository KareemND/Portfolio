import React from "react";
import { useSpring, animated } from 'react-spring';

function Project({ project }) {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div style={props} className="col-4">
      <div className="card text-center">  
        <img 
          src={project.imageUrl} 
          className="card-img-top mx-auto d-block" 
          style={{maxWidth: "150px", maxHeight: "150px", border: "0.5px solid gray"}} 
          alt={project.title} 
        />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <a href={project.demoUrl} className="btn btn-primary">Live Demo</a>
          <a href={project.codeUrl} className="btn btn-secondary">Code</a>
        </div>
      </div>
    </animated.div>
  );
}

export default Project;
