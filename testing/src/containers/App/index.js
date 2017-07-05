import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectsContainer from '../ProjectsContainer';
import AboutContainer from '../AboutContainer';
import BooksContainer from '../BooksContainer';
import EducationContainer from '../EducationContainer';
import ToolsContainer from '../ToolsContainer';
import Header from '../Header';
import Footer from '../../components/Footer/';
import Main from '../Main';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Main findComponent="header" />}
          />
          <Route
            path="/about"
            render={() => <Main findComponent="about" />}
          />
          <Route
            path="/education"
            render={() => <Main findComponent="education" />}
          />
          <Route
            path="/favoriteBooks"
            render={() => <Main findComponent="favoriteBooks" />}
          />
          <Route
            path="/toolBox"
            render={() => <Main findComponent="toolBox" />}
          />
          <Route
            path="/projects"
            render={() => <Main findComponent="projects" />}
          />
          <Route
            path="/findMe"
            render={() => <Main findComponent="footer" />}
          />
        </Switch>
      </div>
    );
  }
}


export default App;
