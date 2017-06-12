import React from 'react';
import PropTypes from 'prop-types';
import MobileSubMenu from '../MobileSubMenu';

const MobileNavBarExpanded = ({ closeExpand, subMenuState, expandSubMenu, closeSubMenu }) => (
  <div onMouseLeave={() => closeExpand()} className="mobileNavBarExpanded">
    {subMenuState ?
      <button className="closeSubMenu" onClick={() => closeSubMenu()}>Close Sub Menu</button>
      :
      <button className="closeButton" onClick={() => closeExpand()}>Close Menu</button>
    }
    {subMenuState ?
      <MobileSubMenu closeSubMenu={closeSubMenu} />
      :
      <button onClick={() => expandSubMenu()} className="menuItems">Who Am I?</button>
    }
    <button className="menuItems">Projects</button>
    <button className="menuItems">Contact Info</button>
  </div>
);

MobileNavBarExpanded.propTypes = {
  closeExpand: PropTypes.func.isRequired,
  subMenuState: PropTypes.bool.isRequired,
  expandSubMenu: PropTypes.func.isRequired,
  closeSubMenu: PropTypes.func.isRequired,
};

export default MobileNavBarExpanded;
