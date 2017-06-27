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
import FindMeHero from '../../components/FindMeComponent/FindMeHero';
import FindMeComponent from '../../components/FindMeComponent/';

class App extends Component {
  render() {
    return (
      <div className="helloWorld">
        <NavBarContainer />
        <HeaderContainer />
        <AboutContainer />
        <EducationContainer />
        <BooksHero />
        <BooksContainer />
        <ToolsHero />
        <ToolsContainer />
        <ProjectsHero />
        <ProjectsContainer />
        <FindMeHero />
        <FindMeComponent />
      </div>
    );
  }
}

export default App;
