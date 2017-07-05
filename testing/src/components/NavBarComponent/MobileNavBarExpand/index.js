import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const MobileNavBarExpanded = ({ closeExpand, expandSubMenu }) => (
  <div onClickCapture={() => closeExpand()} className="mobileNavBarExpanded">
    <button className="closeButton" onClick={() => closeExpand()}>Close Menu</button>
    <div className="mobileMenuContainer">
      <div className="buttonListContainer">
        <div className="buttonContainer">
          <NavLink className="navLink" to="/about"><button className="menuItems">About Me</button></NavLink>
        </div>
        <div className="buttonContainer">
          <NavLink className="navLink" to="/education"><button className="menuItems">Education</button></NavLink>
        </div>
        <div className="buttonContainer">
          <NavLink className="navLink" to="/favoriteBooks"><button className="menuItems">Favorite Books</button></NavLink>
        </div>
        <div className="buttonContainer">
          <NavLink className="navLink" to="/toolBox"><button className="menuItems">Tool Box</button></NavLink>
        </div>
        <div className="buttonContainer">
          <NavLink className="navLink" to="/projects"><button className="menuItems">Projects</button></NavLink>
        </div>
        <div className="socialContainer">
          <button className="socialButton">
            <a href="https://github.com/DjordjeVujatovic"><i className="fa fa-github" aria-hidden="true" /></a>
          </button>
          <button className="socialButton">
            <a href="https://www.linkedin.com/in/djordjevujatovic/"><i className="fa fa-linkedin" aria-hidden="true" /></a>
          </button>
        </div>
      </div>
    </div>
  </div>
);

MobileNavBarExpanded.propTypes = {
  closeExpand: PropTypes.func.isRequired,
  expandSubMenu: PropTypes.func.isRequired,
};

export default MobileNavBarExpanded;
