import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProjects } from '../../redux/modules/actions/projectActions';
import ProjectsComponent from '../../components/ProjectsComponent';
import LoadingComponent from '../../components/LoadingComponent';

class ProjectContainer extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div>
        {isLoading ?
          <LoadingComponent />
          :
          <ProjectsComponent />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.projects.isLoading,
  projects: state.projects.data,
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => {
    dispatch(fetchProjects());
  },
});

ProjectContainer.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);

