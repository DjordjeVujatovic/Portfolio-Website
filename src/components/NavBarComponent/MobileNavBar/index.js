import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MobileNavBar = ({ expand }) => (
  <div className="mobileNavBar">
    <div className="nameContainer">
      <p>Djordje Vujatovic</p>
    </div>
    <button className="openButton" onClick={() => expand()}><i className="fa fa-bars fa-2x" aria-hidden="true" /></button>
    <div className="fullScreenNav">
      <div className="fullScreenButtonContainer">
        <NavLink activeClassName="navLink" to="/">Home</NavLink>
        <NavLink activeClassName="navLink" to="/about">About</NavLink>
        <NavLink activeClassName="navLink" to="/education">Education</NavLink>
        <NavLink activeClassName="navLink" to="/favoritebooks">Favorite Books</NavLink>
        <NavLink activeClassName="navLink" to="/toolbox">Tool Box</NavLink>
        <NavLink activeClassName="navLink" to="/projects">Projects</NavLink>
        <NavLink activeClassName="navLink" to="/findme">Find Me</NavLink>
      </div>
    </div>
  </div>
);

MobileNavBar.propTypes = {
  expand: PropTypes.func.isRequired,
};


export default MobileNavBar;
