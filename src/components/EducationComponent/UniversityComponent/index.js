import React from 'react';
import PropTypes from 'prop-types';

const UniversityComponent = ({ education, universityState, expandUniversityComponent, closeUniversityComponent }) => { //eslint-disable-line
  return (
    <div className={universityState.classState}>
      {universityState.componentExpand ?
        <button onClick={() => closeUniversityComponent()} className={universityState.buttonClass}>{universityState.buttonName}</button>
        :
        <button onClick={() => expandUniversityComponent()} className={universityState.buttonClass}>{universityState.buttonName}</button>
      }
      <div className="educationInfo">
        <div className="educationWrapper">
          <p>{education[0].school}</p>
          <p>{education[0].degree}</p>
          <p>{education[0].summary}</p>
        </div>
      </div>
    </div>
  );
};

UniversityComponent.propTypes = {
  expandUniversityComponent: PropTypes.func.isRequired,
  closeUniversityComponent: PropTypes.func.isRequired,
};

export default UniversityComponent;
