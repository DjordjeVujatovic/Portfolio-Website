import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectsContainer from '../ProjectsContainer';
import AboutContainer from '../AboutContainer';
import BooksContainer from '../BooksContainer';
import EducationContainer from '../EducationContainer';
import ToolsContainer from '../ToolsContainer';
import Header from '../Header';
import Footer from '../../components/Footer/';
import HeroBanner from '../../components/HeroBanner';

class App extends Component {
  render() {
    return (
      <div className="helloWorld">
        <Header />
        <AboutContainer />
        <EducationContainer />
        <BooksContainer />
        <ToolsContainer />
        <ProjectsContainer />
        <Footer />
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
