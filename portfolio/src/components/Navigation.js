import React from 'react';
import { useSpring, animated } from 'react-spring';

function Navigation() {
  const style = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.nav style={style} className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container">
        <a className="navbar-brand" href="#about">About Me</a>
        <a className="navbar-brand" href="#portfolio">Projects</a>
        <a className="navbar-brand" href="#contact">Contact</a>
        <a className="navbar-brand" href="#resume">Resume</a>
      </div>
    </animated.nav>
  );
}

export default Navigation;
