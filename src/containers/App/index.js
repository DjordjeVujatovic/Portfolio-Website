import React, { Component } from 'react';
import ProjectContainer from '../ProjectContainer';
import AboutContainer from '../AboutContainer';
import NavBarContainer from '../NavBarContainer';

class App extends Component {
  render() {
    return (
      <div className="helloWorld">
        <NavBarContainer />
        <ProjectContainer />
        <AboutContainer />
      </div>
    );
  }
}

export default App;
