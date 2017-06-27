import React from 'react';
import PropTypes from 'prop-types';

const MobileNavBar = ({ expand }) => (
  <div className="mobileNavBar">
    <div className="nameContainer">
      <p>Djordje Vujatovic</p>
    </div>
    <button className="openButton" onClick={() => expand()}><i className="fa fa-bars fa-2x" aria-hidden="true" /></button>
    <div className="fullScreenNav">
      <div className="fullScreenButtonContainer">
        <button>About</button>
        <button>Education</button>
        <button>Favorite Books</button>
        <button>Tool Box</button>
        <button>Projects</button>
        <button>Find Me</button>
      </div>
    </div>
  </div>
);

MobileNavBar.propTypes = {
  expand: PropTypes.func.isRequired,
};


export default MobileNavBar;
