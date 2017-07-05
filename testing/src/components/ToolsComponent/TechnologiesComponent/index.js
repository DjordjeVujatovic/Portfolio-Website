import React from 'react';
import PropTypes from 'prop-types';

const TechnologiesComponent = ({ tools, technologiesState, expandTechnologiesComponent, closeTechnologiesComponent }) => { //eslint-disable-line
  return (
    <div className={technologiesState.classState}>
      {technologiesState.componentExpand ?
        <div className="technologiesInfo">
          <div className="componentBanner">
            <div>
              <p>Technologies</p>
            </div>
          </div>
          <div className="technologies">
            <div className="technologiesWrapper">
              <p>{tools[1].technologies[0]}</p>
              <p>{tools[1].technologies[1]}</p>
              <p>{tools[1].technologies[2]}</p>
              <p>{tools[1].technologies[3]}</p>
              <p>{tools[1].technologies[4]}</p>
            </div>
          </div>
          <div className="buttonWrapper">
            <button onClick={() => closeTechnologiesComponent()} className={technologiesState.buttonClass}><i className="fa fa-times fa-3x" aria-hidden="true" /></button>
          </div>
        </div>
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
