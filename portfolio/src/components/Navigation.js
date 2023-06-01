import React from 'react';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#about">About Me</a>
        <a className="navbar-brand" href="#portfolio">Portfolio</a>
        <a className="navbar-brand" href="#contact">Contact</a>
        <a className="navbar-brand" href="#resume">Resume</a>
      </div>
    </nav>
  );
}

export default Navigation;
