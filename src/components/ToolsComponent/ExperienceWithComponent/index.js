import React from 'react';
import PropTypes from 'prop-types';

const ExperienceWithComponent = ({ tools, experienceState, expandExperienceComponent, closeExperienceComponent }) => { //eslint-disable-line
  return (
    <div className={experienceState.classState}>
      {experienceState.componentExpand ?
        <button onClick={() => closeExperienceComponent()} className={experienceState.buttonClass}>{experienceState.buttonName}</button>
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
