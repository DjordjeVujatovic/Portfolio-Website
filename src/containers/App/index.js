import React, { Component } from 'react';
import ProjectsContainer from '../ProjectsContainer';
import ProjectsHero from '../../components/ProjectsComponent/ProjectsHero';
import AboutContainer from '../AboutContainer';
import BooksContainer from '../BooksContainer';
import BooksHero from '../../components/BooksComponent/BooksHero';
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
        <BooksHero />
        <BooksContainer />
        <ToolsHero />
        <ToolsContainer />
        <ProjectsHero />
        <ProjectsContainer />
      </div>
    );
  }
}

export default App;
