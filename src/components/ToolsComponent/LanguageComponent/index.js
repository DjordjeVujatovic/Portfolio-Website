import React from 'react';
import PropTypes from 'prop-types';
import FaClose from 'react-icons/lib/fa/close';

const LanguageComponent = ({ tools, languagesState, expandLanguageComponent, closeLanguageComponent }) => { //eslint-disable-line
  return (
    <div className={languagesState.classState}>
      {languagesState.componentExpand ?
        <div className="languagesInfo">
          <div className="componentBanner">
            <div>
              <p>Languages</p>
            </div>
          </div>
          <div className="languages">
            <div className="languagesWrapper">
              <p>{tools[0].languages[0]}</p>
              <p>{tools[0].languages[1]}</p>
              <p>{tools[0].languages[2]}</p>
            </div>
          </div>
          <div className="buttonWrapper">
            <button onClick={() => closeLanguageComponent()} className={languagesState.buttonClass}><FaClose /></button>
          </div>
        </div>
        :
        <button onClick={() => expandLanguageComponent()} className={languagesState.buttonClass}>{languagesState.buttonName}</button>
      }
    </div>
  );
};
LanguageComponent.propTypes = {
  expandLanguageComponent: PropTypes.func.isRequired,
  closeLanguageComponent: PropTypes.func.isRequired,
};
export default LanguageComponent;
