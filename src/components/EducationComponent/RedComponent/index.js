import React from 'react';

const RedComponent = ({ education, redState, expandRedComponent, closeRedComponent }) => { //eslint-disable-line
  return (
    <div className={redState.classState}>
      {redState.componentExpand ?
        <button onClick={() => closeRedComponent()} className={redState.buttonClass}>{redState.buttonName}</button>
        :
        <button onClick={() => expandRedComponent()} className={redState.buttonClass}>{redState.buttonName}</button>
      }
    </div>
  );
};

export default RedComponent;
