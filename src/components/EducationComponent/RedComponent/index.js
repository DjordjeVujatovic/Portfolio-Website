import React from 'react';
import PropTypes from 'prop-types';

const RedComponent = ({ education, redState, expandRedComponent, closeRedComponent }) => { //eslint-disable-line
  return (
    <div className={redState.classState}>
      {redState.componentExpand ?
        <button onClick={() => closeRedComponent()} className={redState.buttonClass}>{redState.buttonName}</button>
        :
        <button onClick={() => expandRedComponent()} className={redState.buttonClass}>{redState.buttonName}</button>
      }
      <div className="educationInfo">
        <div className="educationWrapper">
          <p>{education[2].school}</p>
          <p>{education[2].diploma}</p>
          <p>{education[2].summary}</p>
        </div>
      </div>
    </div>
  );
};

RedComponent.propTypes = {
  expandRedComponent: PropTypes.func.isRequired,
  closeRedComponent: PropTypes.func.isRequired,
};

export default RedComponent;
