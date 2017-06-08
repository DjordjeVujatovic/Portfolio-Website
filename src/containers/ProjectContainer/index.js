import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProjects } from '../../redux/modules/actions/projectActions';

class ProjectContainer extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <div>
        <p>Projects Container</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects.data,
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => {
    dispatch(fetchProjects());
  },
});

ProjectContainer.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);

