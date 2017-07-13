import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import FaBars from 'react-icons/lib/fa/bars';

const MobileNavBar = ({ expand }) => (
  <div className="mobileNavBar">
    <div className="nameContainer">
      <p>Djordje Vujatovic</p>
    </div>
    <button className="openButton" onClick={() => expand()}><FaBars /></button>
    <div className="fullScreenNav">
      <div className="fullScreenButtonContainer">
        <NavLink activeClassName="navLink" to="/"><button>Home</button></NavLink>
        <NavLink activeClassName="navLink" to="/about"><button>About</button></NavLink>
        <NavLink activeClassName="navLink" to="/education"><button>Education</button></NavLink>
        <NavLink activeClassName="navLink" to="/toolbox"><button>Tool Box</button></NavLink>
        <NavLink activeClassName="navLink" to="/projects"><button>Projects</button></NavLink>
        <NavLink activeClassName="navLink" to="/findme"><button>Find Me</button></NavLink>
      </div>
    </div>
  </div>
);

MobileNavBar.propTypes = {
  expand: PropTypes.func.isRequired,
};


export default MobileNavBar;
