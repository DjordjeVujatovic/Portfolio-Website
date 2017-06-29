import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MobileSubMenu from '../MobileSubMenu';


const MobileNavBarExpanded = ({ closeExpand, subMenuState, expandSubMenu, closeSubMenu }) => (
  <div onClickCapture={() => closeExpand()} className="mobileNavBarExpanded">
    <button className="closeButton" onClick={() => closeExpand()}>Close Menu</button>
    <div className="mobileMenuContainer">
      <div className="buttonListContainer">
        <div className="buttonContainer">
          <NavLink activeClassName="navLink" to="/about"><button className="menuItems">About Me</button></NavLink>
        </div>
        <div className="buttonContainer">
          <NavLink activeClassName="navLink" to="/education"><button className="menuItems">Education</button></NavLink>
        </div>
        <div className="buttonContainer">
          <NavLink activeClassName="navLink" to="/favoriteBooks"><button className="menuItems">Favorite Books</button></NavLink>
        </div>
        <div className="buttonContainer">
          <NavLink activeClassName="navLink" to="/toolBox"><button className="menuItems">Tool Box</button></NavLink>
        </div>
        <div className="buttonContainer">
          <NavLink activeClassName="navLink" to="/projects"><button className="menuItems">Projects</button></NavLink>
        </div>
        <div className="buttonContainer">
          <NavLink activeClassName="navLink" to="/findMe"><button className="menuItems">Find Me</button></NavLink>
        </div>
      </div>
    </div>
  </div>
);

MobileNavBarExpanded.propTypes = {
  closeExpand: PropTypes.func.isRequired,
  subMenuState: PropTypes.bool.isRequired,
  expandSubMenu: PropTypes.func.isRequired,
  closeSubMenu: PropTypes.func.isRequired,
};

export default MobileNavBarExpanded;
