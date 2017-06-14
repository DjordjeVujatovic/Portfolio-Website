import React from 'react';
import PropTypes from 'prop-types';

const DevToolsComponent = ({ tools, devToolsState, expandDevToolsComponent, closeDevToolsComponent }) => { //eslint-disable-line
  return (
    <div className={devToolsState.classState}>
      DevTools Component
    </div>
  );
};

DevToolsComponent.propTypes = {
  expandDevToolsComponent: PropTypes.func.isRequired,
  closeDevToolsComponent: PropTypes.func.isRequired,
};

export default DevToolsComponent;
