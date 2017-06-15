import React from 'react';

const HeaderComponent = () => {
  return (
    <div className="headerComponent">
      <div className="headerContainer">
        <div className="headerWrapper">
          <div className="headerTextWrapper">
            <div>
              <p>Making the commitment to become a software developer is making a commitment to lifelong learning</p>
            </div>
          </div>
          <div className="headerButtonContainer">
            <button className="gitHubButton">GitHub</button>
            <button className="linkedInButton">LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
