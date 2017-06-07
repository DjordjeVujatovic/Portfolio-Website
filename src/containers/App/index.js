import React, { Component } from 'react';
import ProjectContainer from '../ProjectContainer';
import AboutContainer from '../AboutContainer';

class App extends Component {
  render() {
    return (
      <div className="helloWorld">
        <ProjectContainer />
        <AboutContainer />
      </div>
    );
  }
}

export default App;
