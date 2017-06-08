import React from 'react';
import PropTypes from 'prop-types';

const MobileNavBar = ({ expand }) => (
  <div>
    <button onClick={() => expand()}>expand</button>
  </div>
);

MobileNavBar.propTypes = {
  expand: PropTypes.func.isRequired,
};


export default MobileNavBar;
