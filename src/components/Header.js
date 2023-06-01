import React from 'react';
import { useSpring, animated } from 'react-spring';

function Header() {
  const style = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.header style={style} className="bg-primary text-white py-5">
      <div className="container text-center">
        <h1 className="display-4">Karim Nasreddine</h1>
        <p className="lead">Portfolio</p>
      </div>
    </animated.header>
  );
}

export default Header;
