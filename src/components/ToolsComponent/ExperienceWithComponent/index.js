import React from 'react';
import PropTypes from 'prop-types';

const ExperienceWithComponent = ({ tools, experienceState, expandExperienceComponent, closeExperienceComponent }) => { //eslint-disable-line
  return (
    <div className={experienceState.classState}>
      Experience With Component
    </div>
  );
};

ExperienceWithComponent.propTypes = {
  expandExperienceComponent: PropTypes.func.isRequired,
  closeExperienceComponent: PropTypes.func.isRequired,
};

export default ExperienceWithComponent;
