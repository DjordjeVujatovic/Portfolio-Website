import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProjects } from '../../redux/modules/actions/FetchActions/projectActions';
import ProjectsComponent from '../../components/ProjectsComponent';
import LoadingComponent from '../../components/LoadingComponent';
import { expandProjectsComponent, closeProjectsComponent } from '../../redux/modules/actions/ProjectsComponentActions/projectsComponentAction';
import { nextSlide, previousSlide } from '../../redux/modules/actions/ProjectsComponentActions/projectsSliderComponentActions';

class ProjectContainer extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  render() {
    const { isLoading, projects, projectsComponentState, projectsSliderState, expandProjectsComponent, closeProjectsComponent, previousSlide, nextSlide } = this.props; // eslint-disable-line
    return (
      <div>
        {isLoading ?
          <LoadingComponent />
          :
          <ProjectsComponent
            projects={projects}
            projectsComponentState={projectsComponentState}
            projectsSliderState={projectsSliderState}
            expandProjectsComponent={expandProjectsComponent}
            closeProjectsComponent={closeProjectsComponent}
            nextSlide={nextSlide}
            previousSlide={previousSlide}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.projects.isLoading,
  projects: state.projects.data,
  projectsComponentState: state.projectsComponentState,
  projectsSliderState: state.projectsSliderState,
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
});

ProjectContainer.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  expandProjectsComponent: PropTypes.func.isRequired,
  closeProjectsComponent: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
  previousSlide: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);

