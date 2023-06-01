import React from 'react';
import { useSpring, animated } from 'react-spring';

function About() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div style={props} id="about" className="container my-5">
      <h2>About Me</h2>
      <p>
         Hello there! I'm an aspiring full-stack developer with a Bachelor's degree in Biology, earned with honors. My journey into the world of coding began with a profound interest in technology and a desire to explore its endless possibilities.
    <br></br>
    <br></br>
Coming from a background in biology, I bring a unique blend of analytical thinking, attention to detail, and problem-solving skills to my coding endeavors. The scientific mindset I cultivated during my studies has equipped me with a disciplined approach to understanding complex systems and finding creative solutions.

Driven by a deep-rooted curiosity, I have dedicated myself to self-study, online courses, and hands-on coding projects. I thrive in both independent and collaborative environments, continuously expanding my knowledge and adapting to emerging technologies and industry best practices.
<br></br>
<br></br>
I'm excited about the opportunity to apply my diverse skill set, fueled by a background in biology and a genuine love for technology, to create innovative solutions in the ever-evolving landscape of software development.

Thank you for taking the time to learn more about me. I look forward to the possibility of collaborating, learning, and making a positive impact in the realm of technology and beyond.







      </p>
    </animated.div>
  );
}

export default About;
