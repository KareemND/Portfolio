import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <a href="https://github.com/KareemND" className="github social" style={{ color: 'black', marginRight: '1rem' }}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/karim-nasreddine-9b4163221/" className="linkedin social" style={{ color: 'black', marginLeft: '1rem' }}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
