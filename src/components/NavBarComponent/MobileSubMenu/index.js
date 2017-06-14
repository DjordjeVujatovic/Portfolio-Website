import React from 'react';
import PropTypes from 'prop-types';

const MobileSubMenu = ({ closeSubMenu }) => {
  return (
    <div onMouseLeave={() => closeSubMenu()} className="mobileSubMenu">
      <div className="aboutHeader"><p>Who am I ?</p></div>
      <button className="subMenuItems">About Me</button>
      <button className="subMenuItems">Education</button>
      <button className="subMenuItems">Tool Set</button>
      <button className="subMenuItems">Favorite Books</button>
    </div>
  );
};

MobileSubMenu.propTypes = {
  closeSubMenu: PropTypes.func.isRequired,
};

export default MobileSubMenu;
