import React from 'react';

const FindMeComponent = () => {
  return (
    <div className="findMeContainer">
      <div className="fontAwesomeContainer">
        <div className="fontAwesomeWrapper">
          <a href="https://github.com/DjordjeVujatovic"><i className="fa fa-github fa-5x" aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/djordjevujatovic/"><i className="fa fa-linkedin-square fa-5x" aria-hidden="true" /></a>
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
  );
};

export default FindMeComponent;
