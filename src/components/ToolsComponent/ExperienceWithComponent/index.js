import React from 'react';
import PropTypes from 'prop-types';
import FaClose from 'react-icons/lib/fa/close';

const ExperienceWithComponent = ({ tools, experienceState, expandExperienceComponent, closeExperienceComponent }) => { //eslint-disable-line
  return (
    <div className={experienceState.classState}>
      {experienceState.componentExpand ?
        <div className="experienceInfo">
          <div className="componentBanner">
            <div>
              <p>Experience With</p>
            </div>
          </div>
          <div className="experienceWith">
            <div className="experienceWithWrapper">
              <p>{tools[2].experienceWith[0]}</p>
              <p>{tools[2].experienceWith[1]}</p>
              <p>{tools[2].experienceWith[2]}</p>
              <p>{tools[2].experienceWith[3]}</p>
              <p>{tools[2].experienceWith[4]}</p>
            </div>
          </div>
          <div className="buttonWrapper">
            <button onClick={() => closeExperienceComponent()} className={experienceState.buttonClass}><FaClose /></button>
          </div>
        </div>
        :
        <button onClick={() => expandExperienceComponent()} className={experienceState.buttonClass}>{experienceState.buttonName}</button>
      }
    </div>
  );
};

ExperienceWithComponent.propTypes = {
  expandExperienceComponent: PropTypes.func.isRequired,
  closeExperienceComponent: PropTypes.func.isRequired,
};

export default ExperienceWithComponent;
