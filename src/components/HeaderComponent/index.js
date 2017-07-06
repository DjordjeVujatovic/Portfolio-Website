import React from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

const HeaderComponent = () => {
  return (
    <div className="headerComponent">
      <div className="headerContainer">
        <div className="headerWrapper">
          <div className="headerTextWrapper">
            <div>
              <p><q>Making the commitment to become a software developer is making a commitment to lifelong learning</q> - Eric Elliott</p>
            </div>
          </div>
          <div className="headerButtonContainer">
            <button className="gitHubButton">
              <a href="https://github.com/DjordjeVujatovic"><FaGithub /></a>
            </button>
            <button className="linkedInButton">
              <a href="https://www.linkedin.com/in/djordjevujatovic/"><FaLinkedin /></a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
