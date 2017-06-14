import React from 'react';
import PropTypes from 'prop-types';

const LanguageComponent = ({ tools, languagesState, expandLanguageComponent, closeLanguageComponent }) => { //eslint-disable-line
  return (
    <div className={languagesState.classState}>
      Language Component
    </div>
  );
};
LanguageComponent.propTypes = {
  expandLanguageComponent: PropTypes.func.isRequired,
  closeLanguageComponent: PropTypes.func.isRequired,
};
export default LanguageComponent;
