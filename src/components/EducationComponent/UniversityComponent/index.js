import React from 'react';

const UniversityComponent = ({ education, universityState, expandUniversityComponent, closeUniversityComponent }) => { //eslint-disable-line
  return (
    <div className={universityState.classState}>
      {universityState.componentExpand ?
        <button onClick={() => closeUniversityComponent()} className={universityState.buttonClass}>{universityState.buttonName}</button>
        :
        <button onClick={() => expandUniversityComponent()} className={universityState.buttonClass}>{universityState.buttonName}</button>
      }
    </div>
  );
};

export default UniversityComponent;
