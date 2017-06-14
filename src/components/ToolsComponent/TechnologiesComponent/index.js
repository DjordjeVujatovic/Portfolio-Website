import React from 'react';
import PropTypes from 'prop-types';

const TechnologiesComponent = ({ tools, technologiesState, expandTechnologiesComponent, closeTechnologiesComponent }) => { //eslint-disable-line
  return (
    <div className={technologiesState.classState}>
      {technologiesState.componentExpand ?
        <button onClick={() => closeTechnologiesComponent()} className={technologiesState.buttonClass}>{technologiesState.buttonName}</button>
        :
        <button onClick={() => expandTechnologiesComponent()} className={technologiesState.buttonClass}>{technologiesState.buttonName}</button>
      }
    </div>
  );
};

TechnologiesComponent.propTypes = {
  expandTechnologiesComponent: PropTypes.func.isRequired,
  closeTechnologiesComponent: PropTypes.func.isRequired,
};

export default TechnologiesComponent;
