import React, { Component } from 'react';
import ProjectContainer from '../ProjectContainer';
import AboutContainer from '../AboutContainer';
import BooksContainer from '../BooksContainer';
import EducationHero from '../../components/EducationComponent/EducationHero';
import EducationContainer from '../EducationContainer';
import ToolsContainer from '../ToolsContainer';
import ToolsHero from '../../components/ToolsComponent/ToolsHero';
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
        <ToolsHero />
        <ToolsContainer />
        <BooksContainer />
        <ProjectContainer />
      </div>
    );
  }
}

export default App;
