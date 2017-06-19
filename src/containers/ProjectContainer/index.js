import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProjects } from '../../redux/modules/actions/FetchActions/projectActions';
import ProjectsComponent from '../../components/ProjectsComponent';
import LoadingComponent from '../../components/LoadingComponent';
import { expandProjectsComponent, closeProjectsComponent } from '../../redux/modules/actions/ProjectsComponentActions/projectsComponentAction';

class ProjectContainer extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  render() {
    const { isLoading, projects, projectsComponentState, expandProjectsComponent, closeProjectsComponent } = this.props; // eslint-disable-line
    return (
      <div>
        {isLoading ?
          <LoadingComponent />
          :
          <ProjectsComponent
            projects={projects}
            projectsComponentState={projectsComponentState}
            expandProjectsComponent={expandProjectsComponent}
            closeProjectsComponent={closeProjectsComponent}
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
});

ProjectContainer.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  expandProjectsComponent: PropTypes.func.isRequired,
  closeProjectsComponent: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);

