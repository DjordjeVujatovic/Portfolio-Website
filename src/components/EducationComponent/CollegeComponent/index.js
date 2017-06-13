import React from 'react';

const CollegeComponent = ({ education, collegeState, expandCollegeComponent, closeCollegeComponent }) => { //eslint-disable-line
  return (
    <div className={collegeState.classState}>
      {collegeState.componentExpand ?
        <button onClick={() => closeCollegeComponent()} className={collegeState.buttonClass}>{collegeState.buttonName}</button>
        :
        <button onClick={() => expandCollegeComponent()} className={collegeState.buttonClass}>{collegeState.buttonName}</button>
      }
      <div className="educationInfo">
        <span>
          <p>{education[1].school}</p>
          <p>{education[1].diploma}</p>
          <p>{education[1].summary}</p>
        </span>
      </div>
    </div>
  );
};

export default CollegeComponent;
