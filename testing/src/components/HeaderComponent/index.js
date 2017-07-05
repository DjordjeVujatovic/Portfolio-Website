import React from 'react';

const HeaderComponent = () => {
  return (
    <div className="headerComponent">
      <div className="headerContainer">
        <div className="headerWrapper">
          <div className="headerTextWrapper">
            <div>
              <p><q>Making the commitment to become a software developer is making a commitment to lifelong learning</q></p>
            </div>
          </div>
          <div className="headerButtonContainer">
            <button className="gitHubButton">
              <a href="https://github.com/DjordjeVujatovic"><i className="fa fa-github" aria-hidden="true" /></a>
            </button>
            <button className="linkedInButton">
              <a href="https://www.linkedin.com/in/djordjevujatovic/"><i className="fa fa-linkedin" aria-hidden="true" /></a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
