import React from 'react';

const MobileSubMenu = () => {
  return (
    <div className="mobileSubMenu">
      <div className="aboutHeader"><p>Who am I ?</p></div>
      <button className="subMenuItems">About Me</button>
      <button className="subMenuItems">Education</button>
      <button className="subMenuItems">Tool Set</button>
      <button className="subMenuItems">Favorite Books</button>
    </div>
  );
};

export default MobileSubMenu;
