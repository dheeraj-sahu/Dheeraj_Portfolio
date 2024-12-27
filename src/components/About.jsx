import React from 'react';
import './About.css';
import about from './data/profile.json';

const About = () => {
  return (
    <div className="about" id='about'>
      <div className="about-header">
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <div className="left"
         data-aos="fade-up-right"
        data-aos-duration="1000"
        
        >
          <div className="img">
            <img src={`/assets/${about.imgSrc}`} alt="About Me" />
          </div>
        </div>
        <div className="right">
          <p>{about.description1}</p>
          <p>{about.description2}</p>
          <a href="https://www.linkedin.com/in/dheerajsahu/" className="btn btn-outline-warning">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default About;
