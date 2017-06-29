import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MobileNavBar = ({ expand }) => (
  <div className="mobileNavBar">
    <div className="nameContainer">
      <p>Djordje Vujatovic</p>
    </div>
    <button className="openButton" onClick={() => expand()}><i className="fa fa-bars fa-2x" aria-hidden="true" /></button>
    <div className="fullScreenNav">
      <div className="fullScreenButtonContainer">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/education">Education</Link></button>
        <button><Link to="/favoritebooks">Favorite Books</Link></button>
        <button><Link to="/toolbox">Tool Box</Link></button>
        <button><Link to="/projects">Projects</Link></button>
        <button><Link to="/findme">Find Me</Link></button>
      </div>
    </div>
  </div>
);

MobileNavBar.propTypes = {
  expand: PropTypes.func.isRequired,
};


export default MobileNavBar;
