import React from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import HeroBanner from '../HeroBanner';


const Footer = ({ componentRef }) => { //eslint-disable-line
  return (
    <div ref={componentRef}>
      <HeroBanner bannerContainer="findMeHeroBanner" textWrapper="findMeTextWrapper" bannerTitle="Find Me" />
      <div className="findMeContainer">
        <div className="fontAwesomeContainer">
          <div className="fontAwesomeWrapper">
            <a href="https://github.com/DjordjeVujatovic"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/djordjevujatovic/"><FaLinkedin /></a>
          </div>
        </div>
        <div className="findMeTextContainer">
          <div className="findMeText">
            <div className="cornyText">
              <p>This Website was built with React + Redux and a FireBase REST API. It was designed using nothing more than imaginative improvisation and a whiteboard.</p>
            </div>
            <div className="copyRightText">
              <p>Copyright © 2017 Djordje Vujatovic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
