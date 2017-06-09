import React, { Component } from 'react';
import ProjectContainer from '../ProjectContainer';
import AboutContainer from '../AboutContainer';
import NavBarContainer from '../NavBarContainer';
import HeaderContainer from '../HeaderContainer';

class App extends Component {
  render() {
    return (
      <div className="helloWorld">
        <NavBarContainer />
        <HeaderContainer />
        <AboutContainer />
        <ProjectContainer />
      </div>
    );
  }
}

export default App;
