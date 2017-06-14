import React from 'react';
import PropTypes from 'prop-types';

const LanguageComponent = ({ tools, languagesState, expandLanguageComponent, closeLanguageComponent }) => { //eslint-disable-line
  return (
    <div className={languagesState.classState}>
      {languagesState.componentExpand ?
        <div className="languagesInfo">
          <div className="languageInfoWrapper">
            <div className="languages">
              <div className="componentBanner">
                <p>Languages</p>
              </div>
              <p>{tools[0].languages[0]}</p>
              <p>{tools[0].languages[1]}</p>
              <p>{tools[0].languages[2]}</p>
            </div>
            <button onClick={() => closeLanguageComponent()} className={languagesState.buttonClass}>{languagesState.buttonName}</button>
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
