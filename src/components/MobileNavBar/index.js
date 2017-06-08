import React from 'react';
import PropTypes from 'prop-types';

const MobileNavBar = ({ expand }) => (
  <div className="mobileNavBar">
    <h1>Djordje Vujatovic</h1>
    <button onClick={() => expand()}>Menu</button>
  </div>
);

MobileNavBar.propTypes = {
  expand: PropTypes.func.isRequired,
};


export default MobileNavBar;
