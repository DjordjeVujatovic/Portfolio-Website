import React from 'react';
import PropTypes from 'prop-types';

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

CollegeComponent.propTypes = {
  expandCollegeComponent: PropTypes.func.isRequired,
  closeCollegeComponent: PropTypes.func.isRequired,
};
export default CollegeComponent;
