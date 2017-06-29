import React, { Component } from 'react';
import ProjectsContainer from '../ProjectsContainer';
import AboutContainer from '../AboutContainer';
import BooksContainer from '../BooksContainer';
import EducationContainer from '../EducationContainer';
import ToolsContainer from '../ToolsContainer';
import Header from '../Header';
import Footer from '../../components/Footer/';

class Main extends Component {
  componentDidMount() {
    const { findComponent } = this.props; //eslint-disable-line
    if (findComponent) {
      setTimeout(() => {
        this.scrollToComponent(findComponent);
      }, 500);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { findComponent } = nextProps; //eslint-disable-line
    if (findComponent) {
      this.scrollToComponent(findComponent);
    }
  }

  scrollToComponent(findComponent) {
    switch (findComponent) {
      case 'header':
        this.headerContainer.scrollIntoView();
        break;
      case 'about':
        this.aboutContainer.scrollIntoView();
        break;
      case 'education':
        this.educationContainer.scrollIntoView();
        break;
      case 'favoriteBooks':
        this.booksContainer.scrollIntoView();
        break;
      case 'toolBox':
        this.toolsContainer.scrollIntoView();
        break;
      case 'projects':
        this.projectsContainer.scrollIntoView();
        break;
      case 'footer':
        this.footerContainer.scrollIntoView();
        break;
      default:
    }
  }
  render() {
    return (
      <div>
        <Header componentRef={component => (this.headerContainer = component)} />
        <AboutContainer componentRef={component => (this.aboutContainer = component)} />
        <EducationContainer componentRef={component => (this.educationContainer = component)} />
        <BooksContainer componentRef={component => (this.booksContainer = component)} />
        <ToolsContainer componentRef={component => (this.toolsContainer = component)} />
        <ProjectsContainer componentRef={component => (this.projectsContainer = component)} />
        <Footer componentRef={component => (this.footerContainer = component)} />
      </div>
    );
  }
}

export default Main;
