import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
import LoadingComponent from '../../components/LoadingComponent';
import HeroBanner from '../../components/HeroBanner';

class App extends Component {
  render() {
    return (
      <div className="helloWorld">
        <NavBarContainer />
        <AboutContainer />
        <EducationContainer />
        <BooksContainer />
        <ToolsContainer />
        <ProjectsContainer />
        <FindMeComponent />
      </div>
    );
  }
}
        /*  <Route exact path="/" component={HeaderContainer} />
          <Route path="/about" component={AboutContainer} />
          <EducationHero />
          <Route path="/education" component={EducationContainer} />
          <BooksHero />
          <Route path="/favoritebooks" component={BooksContainer} />
          <ToolsHero />
          <Route path="/toolbox" component={ToolsContainer} />
          <ProjectsHero />
          <Route path="/projects" component={ProjectsContainer} />
          <FindMeHero />
          <Route path="/findme" component={FindMeComponent} /> */

export default App;
