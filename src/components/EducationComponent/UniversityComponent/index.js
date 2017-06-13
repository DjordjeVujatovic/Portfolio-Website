import React from 'react';

const UniversityComponent = ({ education, universityState, expandUniversityComponent, closeUniversityComponent }) => { //eslint-disable-line
  return (
    <div className={universityState.classState}>
      {universityState.componentExpand ?
        <button onClick={() => closeUniversityComponent()} className={universityState.buttonClass}>{universityState.buttonName}</button>
        :
        <button onClick={() => expandUniversityComponent()} className={universityState.buttonClass}>{universityState.buttonName}</button>
      }
      <div className="educationInfo">
        <span>
          <p>{education[0].school}</p>
          <p>{education[0].degree}</p>
          <p>{education[0].summary}</p>
        </span>
      </div>
    </div>
  );
};

export default UniversityComponent;
