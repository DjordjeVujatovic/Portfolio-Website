import React, { Component } from 'react';
import MobileNavBar from '../../components/MobileNavBar';
import MobileNavBarExpanded from '../../components/MobileNavBarExpand';

class NavBarContainer extends Component {
  render() {
    return (
      <div>
        <MobileNavBar />
        <MobileNavBarExpanded />
      </div>
    );
  }
}

export default NavBarContainer;
