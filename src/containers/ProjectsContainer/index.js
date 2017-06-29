import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProjects } from '../../redux/modules/actions/FetchActions/projectActions';
import ProjectsComponent from '../../components/ProjectsComponent';
import LoadingComponent from '../../components/LoadingComponent';
import { expandProjectsComponent, closeProjectsComponent } from '../../redux/modules/actions/ProjectsComponentActions/projectsComponentAction';
import { nextSlide, previousSlide, changeComponentState } from '../../redux/modules/actions/ProjectsComponentActions/projectsSliderActions';
import { readMore, closeReadMore } from '../../redux/modules/actions/ProjectsComponentActions/readMoreActions';
import HeroBanner from '../../components/HeroBanner';

class ProjectContainer extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  render() {
    const { isLoading, projects, projectsComponentState, projectState, slideCount, expandProjectsComponent, closeProjectsComponent, previousSlide, nextSlide, readMore, changeComponentState, closeReadMore, componentRef } = this.props; // eslint-disable-line
    function filter(id, slideCount) {
      if ((slideCount === id) && readMore) {
        return true;
      } return false;
    }
    return (
      <div ref={componentRef}>
        {isLoading ?
          <LoadingComponent />
          :
          <div>
            <HeroBanner bannerContainer="projectsHeroBanner" textWrapper="projectsTextWrapper" bannerTitle="My Projects" />
            <ProjectsComponent
              projects={projects}
              projectsComponentState={projectsComponentState}
              projectState={projectState}
              expandProjectsComponent={expandProjectsComponent}
              closeProjectsComponent={closeProjectsComponent}
              nextSlide={nextSlide}
              previousSlide={previousSlide}
              readMore={readMore}
              closeReadMore={closeReadMore}
              changeComponentState={changeComponentState}
              filter={filter}
            />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.projects.isLoading,
  projects: state.projects.data,
  projectsComponentState: state.projectsComponentState,
  projectState: state.projectState,
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => {
    dispatch(fetchProjects());
  },
  expandProjectsComponent: () => {
    dispatch(expandProjectsComponent());
  },
  closeProjectsComponent: () => {
    dispatch(closeProjectsComponent());
  },
  nextSlide: () => {
    dispatch(nextSlide());
  },
  previousSlide: () => {
    dispatch(previousSlide());
  },
  readMore: () => {
    dispatch(readMore());
  },
  closeReadMore: () => {
    dispatch(closeReadMore());
  },
  changeComponentState: () => {
    dispatch(changeComponentState());
  },
});

ProjectContainer.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  expandProjectsComponent: PropTypes.func.isRequired,
  closeProjectsComponent: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
  previousSlide: PropTypes.func.isRequired,
  slideCount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);

