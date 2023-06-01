import React from 'react';

function Project() {
  return (
    <div className="col-md-4 my-3">
      <div className="card">
        {/* Replace with your own image */}
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Project"/>
        <div className="card-body">
          <h5 className="card-title">Project title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go to project</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
