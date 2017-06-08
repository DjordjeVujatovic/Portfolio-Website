import React from 'react';
import PropTypes from 'prop-types';

const MobileNavBarExpanded = ({ closeExpand }) => (
  <div>
    <button onClick={() => closeExpand()}>Close Expand</button>
  </div>
);

MobileNavBarExpanded.propTypes = {
  closeExpand: PropTypes.func.isRequired,
};

export default MobileNavBarExpanded;
