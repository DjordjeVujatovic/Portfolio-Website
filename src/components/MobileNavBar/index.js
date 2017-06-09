import React from 'react';
import PropTypes from 'prop-types';

const MobileNavBar = ({ expand }) => (
  <div className="mobileNavBar">
    <p>Djordje Vujatovic</p>
    <button className="openButton" onClick={() => expand()}>Menu</button>
  </div>
);

MobileNavBar.propTypes = {
  expand: PropTypes.func.isRequired,
};


export default MobileNavBar;
