import React, { Component } from 'react';
import ProjectContainer from '../ProjectContainer';
import AboutContainer from '../AboutContainer';
import BooksContainer from '../BooksContainer';
import EducationHero from '../../components/EducationHero';
import EducationContainer from '../EducationContainer';
import ToolsContainer from '../ToolsContainer';
import NavBarContainer from '../NavBarContainer';
import HeaderContainer from '../HeaderContainer';

class App extends Component {
  render() {
    return (
      <div className="helloWorld">
        <NavBarContainer />
        <HeaderContainer />
        <AboutContainer />
        <EducationHero />
        <EducationContainer />
        <ToolsContainer />
        <BooksContainer />
        <ProjectContainer />
      </div>
    );
  }
}

export default App;
